// Vertex shader

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) rel_pos: vec2<f32>
};

@vertex
fn vs_sky(
    @location(0) pos: vec2<f32>
) -> VertexOutput {
    var out: VertexOutput;
    out.clip_position = vec4<f32>(pos, 0.0, 1.0);
    out.rel_pos = pos;
    return out;
}

// Fragment shader

const horizon_color: vec3<f32> = vec3<f32>(vec3(91, 110, 225));
const sky_color: vec3<f32> = vec3<f32>(vec3(95, 205, 228));
const horizon_pos: f32 = -0.1;

fn rgb2hsv(c: vec3<f32>) -> vec3<f32> {
    var K: vec4<f32> = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    var p: vec4<f32> = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    var q: vec4<f32> = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    var d: f32 = q.x - min(q.w, q.y);
    var e: f32 = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

fn hsv2rgb(c: vec3<f32>) -> vec3<f32> {
    var K: vec4<f32> = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    var p: vec3<f32> = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, vec3(0.0), vec3(1.0)), c.y);
}

@fragment
fn fs_sky(in: VertexOutput) -> @location(0) vec4<f32> {
    var horizon_hsv = rgb2hsv(horizon_color/255.0);
    var sky_hsv = rgb2hsv(sky_color/255.0);

    var mixed = mix(horizon_hsv, sky_hsv, abs(in.rel_pos.y*0.5 + 0.5 - horizon_pos));
    mixed.y *= 0.85; // Desaturate

    return vec4<f32>(hsv2rgb(mixed), 1.0);
}