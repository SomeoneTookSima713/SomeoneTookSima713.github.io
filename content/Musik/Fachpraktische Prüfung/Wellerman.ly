\language "deutsch"

musicOne = \transpose c' a {
    \key c \major
    \clef tenor
    \tempo 4 = 175
    {
        \mark \markup { \normalsize "Strophe" }
        {
            \partial 4 e' |
            a a8 a a4 c' |
            e' e' e'4. e'8 |
            f'4 d'8 d' d'4 d'8[ f'] |
            a'[ a'] e'4 e'4. e'8 |
            a4 a a c' |
            e' e' e' e' |
            e' d' c'8 c' h4 |
            a1 \bar "||"
        }
    }

    {
        \mark \markup { \normalsize "Refrain" }
        {
            a'2 a'4. f'8 |
            g' g' e'4 e'4. e'8 |
            f'4 d' d'8 e' f'4 |
            a' e' e'2 |
            a' a'4 f'8[ f'] |
            g'[ g'] e'4 e' e' |
            e' d' c' h a1 \bar "|."
        }
    }
}

verseOne = \lyricmode {
    There once was a ship that put to sea, The name of the ship was the Bil -- ly of Tea The winds blew up, her bow dipped down, O blow, my bul -- ly boys, blow.

    Soon may the Wel -- ler -- man come And bring us su -- gar and tea and rum. One day, when the tongu -- in' is done, We'll take our leave and go.
}

\header {
    title = "Soon May the Wellerman Come."
}

\layout {
    indent = 0.0
}

\score {

    <<
        \new Voice = "one" {
            \musicOne
        }
        \new Lyrics \lyricsto "one" {
            \verseOne
        }
    >>
    % <<
    %     \new Voice = "two" {
    %         \musicTwo
    %     }
    %     \new Lyrics \lyricsto "two" {
    %         \verseTwo
    %     }
    % >>
    \layout {}
    \midi {}
}

\markup {
    \column {
        2. {
        \line { She had not been two weeks from shore }
        \line { When down on her a right whale bore. }
        \line { The captain called all hands and swore }
        \line { He'd take that whale in tow. }
        }
        \vspace #0.5
        \line{\italic{ Refrain }}
        \vspace #0.5
        3. {
            \line { Before the boat had hit the water }
            \line { The whale's tail came up and caught her. }
            \line { All hands to the side, harpooned and fought her, }
            \line { When she dived down below. }
        }
        \vspace #0.5
        \line{\italic{ Refrain }}
        \vspace #0.5
        4. {
            \line { No line was cut, no whale was freed, }
            \line { An' the captain's mind was not on greed! }
            \line { But he belonged to the Whaleman's creed }
            \line { She took that ship in tow }
        }
        \vspace #0.5
        \line{\italic{ Refrain }}
    }
    \hspace #4 \column {
        5. {
        \line { For forty days or even more, }
        \line { the line went slack then tight once more, }
        \line { All boats were lost, there were only four }
        \line { and still that whale did go. }
        }
        \vspace #0.5
        \line{\italic{ Refrain }}
        \vspace #0.5
        6. {
            \line { As far as I've heard, the fight's still on, }
            \line { The line's not cut, and the whale's not gone! }
            \line { The Wellerman makes his regular call }
            \line { to encourage the captain, crew and all! }
        }
        \vspace #0.5
        \line{\italic{ Refrain x2 }}
    }
}