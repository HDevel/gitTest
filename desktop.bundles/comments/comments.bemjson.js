module.exports = {
    block: 'page',
    title: 'Комментарии',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'comments.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'comments.js'}],
    content: [
        {
            block: 'article',
            content: [
                {
                    block: 'text',
                    mix: {block: 'article', elem: 'heading-text'},
                    mods: {'fa-icon': 'commentz'},
                    content: 'Комментарии'
                },
                {
                    block: 'comments',
                    content: [
                        {
                            block: 'control-group',
                            mix: {block: 'comments', elem: 'control-group'},
                            content: ['Все', 'Ожидающие(0)', 'Одобренные(0)', 'Спам', 'Корзина(0)'].map(function (service) {
                                return {
                                    block: 'button',
                                    mods: {theme: 'islands', size: 'l', focused: service === 'Все'},
                                    text: service
                                };
                            })
                        },
                        {
                            elem: 'layout',
                            mix: {block: 'layout'},
                            content: [
                                {
                                    elem: 'left',
                                    content: (function() {

                                        return 'BEM is extermly cool'.split('').map(function() {
                                            var service = ['twitter', 'instagram'];

                                            return {
                                                service: service,
                                                user: {
                                                    login: 'tadatuta',
                                                    name: 'Vladimir',
                                                    avatar: 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/_theme/sign_theme_batman.png'
                                                },
                                                time: Math.floor((Math.random()*12)+1) + 'h',
                                                img: service === 'instagram' ? 'http://bla.jpg' : undefined,
                                                text: [
                                                    'Блок — это независимый интерфейсный компонент. Блок может быть простым или составным (содержать другие блоки).']
                                            };
                                        }).map(function(dataItem) {
                                            return {
                                                block: 'island',
                                                content: [
                                                    {
                                                        elem: 'header',
                                                        content: {
                                                            block: 'user',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    mix: { block: 'user', elem: 'name' },
                                                                    url: 'https://www.yandex.ru',
                                                                    target: '_blank',
                                                                    content: dataItem.user.name
                                                                },
                                                                {
                                                                    elem: 'post-time',
                                                                    content: dataItem.time
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'user', elem: 'icon' },
                                                                    url: dataItem.user.avatar,
                                                                    alt: dataItem.user.name
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'text',
                                                        content: dataItem.text
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        content: [
                                                            {
                                                                block: 'service',
                                                                mods: { type: dataItem.service }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            };
                                        });
                                    })()

                                    //    [
                                    //    {
                                    //        block: 'select',
                                    //        mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                    //        val: 1,
                                    //        options: [
                                    //            {val: 1, text: 'Изменить'},
                                    //            {val: 2, text: 'Удалить'},
                                    //            {val: 3, text: 'Сохранить'}
                                    //        ]
                                    //    },
                                    //    {
                                    //        block: 'button',
                                    //        mods: {theme: 'grey', type: 'submit'},
                                    //        text: 'Применить'
                                    //    }
                                    //]
                                },
                                {
                                    elem: 'right',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                            val: 1,
                                            options: [
                                                {val: 1, text: 'Все типы комментариев', disabled: true},
                                                {val: 2, text: 'Важные'},
                                                {val: 3, text: 'Личные'},
                                                {val: 4, text: 'etc.'}
                                            ]
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey'},
                                            text: 'Фильтр'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'table',
                            mix: {block: 'comments', elem: 'table'},
                            content: [
                                {
                                    elem: 'col',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'checkbox',
                                                mods: {theme: 'islands', size: 'l'}
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'text',
                                                content: 'Автор'
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'text',
                                                content: 'Комментарий'
                                            }
                                        }
                                    ]
                                },
                                {
                                    elem: 'col',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'checkbox',
                                                mods: {theme: 'islands', size: 'l'}
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    block: 'account-info',
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            url: 'https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/user-512.png',
                                                            width: 50,
                                                            height: 50
                                                        },
                                                        {
                                                            block: 'text',
                                                            content: '%username%\n'
                                                        },
                                                        {
                                                            block: 'link',
                                                            url: '=content',
                                                            mods: {theme: 'turquoise'},
                                                            content: 'qwerty@gmail.com'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {theme: 'turquoise'},
                                                    content: 'IP address'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    block: 'text',
                                                    content: 'Отправлен'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'DateTime'
                                                },
                                                {
                                                    block: 'text',
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'layout',
                            mix: {block: 'layout'},
                            content: [
                                {
                                    elem: 'left',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                            val: 1,
                                            options: [
                                                {val: 1, text: 'Изменить'},
                                                {val: 2, text: 'Удалить'},
                                                {val: 3, text: 'Сохранить'}
                                            ]
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey'},
                                            text: 'Применить'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
