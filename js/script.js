$(document).ready(function() {
    // ヘッダーの生成
    var header = $('<header>', { id: 'header', class: 'wrapper' });
    var siteTitle = $('<h1>', { class: 'site-title' }).append(
        $('<a>', { href: 'index.html' }).append(
            $('<img>', { src: 'img/logo.svg', alt: 'Profile' })
        )
    );
    var nav = $('<nav>').append(
        $('<ul>').append(
            $('<li>').append($('<a>', { href: '#about', text: 'About' })),
            $('<li>').append($('<a>', { href: '#bicycle', text: 'Bicycle' }))
        )
    );
    header.append(siteTitle, nav);
    $('#app').append(header);

    // メインビジュアルの生成
    var mainvisual = $('<div>', { id: 'mainvisual' }).append(
        $('<img>', { src: 'img/mainvisual.jpg', alt: 'テキストテキストテキスト' })
    );
    $('#app').append(mainvisual);

    // Aboutセクションの生成
    var aboutSection = $('<section>', { id: 'about', class: 'wrapper' }).append(
        $('<h2>', { class: 'section-title', text: 'About' }),
        $('<div>', { class: 'content' }).append(
            $('<img>', { src: 'img/about.jpg', alt: 'テキストテキストテキスト' }),
            $('<div>', { class: 'text' }).append(
                $('<h3>', { class: 'content-title', text: 'KAKERU MIYAICHI' }),
                $('<p>').html(
                    'テキストテキストテキストテキストテキストテキストテキスト<br>' +
                    'テキストテキストテキストテキストテキストテキストテキスト<br>' +
                    'テキストテキストテキストテキストテキストテキストテキスト'
                )
            )
        )
    );
    $('#app').append(aboutSection);

    // Bicycleセクションの生成
    var bicycleSection = $('<section>', { id: 'bicycle', class: 'wrapper' }).append(
        $('<h2>', { class: 'section-title', text: 'Bicycle' }),
        $('<ul>').append(
            $('<li>').append(
                $('<img>', { src: 'img/bicycle1.jpg', alt: 'テキストテキストテキスト' }),
                $('<h3>', { class: 'content-title', text: 'タイトルタイトル' }),
                $('<p>', { text: 'テキストテキストテキスト' })
            ),
            $('<li>').append(
                $('<img>', { src: 'img/bicycle2.jpg', alt: 'テキストテキストテキスト' }),
                $('<h3>', { class: 'content-title', text: 'タイトルタイトル' }),
                $('<p>', { text: 'テキストテキストテキスト' })
            ),
            $('<li>').append(
                $('<img>', { src: 'img/bicycle3.jpg', alt: 'テキストテキストテキスト' }),
                $('<h3>', { class: 'content-title', text: 'タイトルタイトル' }),
                $('<p>', { text: 'テキストテキストテキスト' })
            )
        )
    );
    $('#app').append(bicycleSection);

    // フッターの生成
    var footer = $('<footer>', { id: 'footer' }).append(
        $('<p>', { text: '© 2020 Profile' })
    );
    $('#app').append(footer);
});
