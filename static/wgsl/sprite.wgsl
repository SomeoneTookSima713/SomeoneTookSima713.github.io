// Vertex shader

struct Vertex {
    @location(0) pos: vec2<f32>,
    @location(1) uv: vec2<f32>,
}

struct Instance {
    @location(2) pos: vec2<f32>,
    @location(3) size: vec2<f32>,
    @location(4) z: f32
}

struct VertexOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) uv: vec2<f32>,
};

@group(1) @binding(0)
var<uniform> camera_mat: mat4x4<f32>;

@vertex
fn vs_main(
    vertex: Vertex,
    instance: Instance
) -> VertexOutput {
    var out: VertexOutput;

    var pos = vertex.pos * instance.size + instance.pos;

    out.clip_position = camera_mat * vec4(pos, 0.0, 1.0);
    out.uv = vertex.uv; 

    return out;
}

// Fragment shader
@group(2) @binding(0)
var texture: texture_2d<f32>;
@group(2) @binding(1)
var samp: sampler;

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    return pow(textureSample(texture, samp, in.uv), vec4(1.0/2.2, 1.0/2.2, 1.0/2.2, 1.0));
    // return vec4(1.0, 0.0, 0.0, 1.0);
}