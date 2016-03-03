module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'index.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: [
        {
            block: 'head',
            content: {
                block: 'menu',
                mods: {type: 'top'},
                content: [
                    {
                        elem: 'menu-item',
                        content: {
                            block: 'text',
                            content: 'Host'
                        }
                    },
                    {
                        elem: 'menu-item',
                        val: 2,
                        content: {
                            block: 'link',
                            mods: {'fa-icon': 'wordpress'}
                        }
                    },
                    {
                        elem: 'menu-item',
                        val: 3,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'home'},
                                url: '#',
                                content: 'Первый сайт'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 4,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'refresh'},
                                url: '#',
                                content: '1'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 5,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'commentz'},
                                url: '#',
                                content: '0'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 6,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'plus'},
                                url: '#',
                                content: 'Добавить'
                            }
                        ]
                    },
                    {
                        block: 'menu-item',
                        val: 7,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'user'},
                                url: '#',
                                content: 'Привет, %user%'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'article-menu',
            content: [
                {
                    block: 'menu',
                    mods: {type: 'left'},
                    content: [
                        {
                            elem: 'menu-item',
                            val: 1,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'tachometer'},
                                url: '#',
                                content: 'Консоль'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 2,
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'Главная'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 3,
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'Обновления'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 4,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'thumb-tack'},
                                url: '../note/note.html',
                                content: 'Заметки'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 5,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'file'},
                                url: '../pages/pages.html',
                                content: 'Страницы'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 6,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'commentz'},
                                url: '../comments/comments.html',
                                content: 'Комментарии'
                            }
                        }
                    ]
                },
                {
                    block: 'menu',
                    mods: {type: 'left'},
                    content: [
                        {
                            elem: 'menu-item',
                            val: 1,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'paint-brush'},
                                url: '#',
                                content: 'Внешний вид'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 2,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'plug'},
                                url: '../elements/elements.html',
                                content: 'Элементы'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 3,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'uses'},
                                url: '#',
                                content: 'Пользователи'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 4,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'wrench'},
                                url: '#',
                                content: 'Инструменты'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 5,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'cogs'},
                                url: '#',
                                content: 'Настройки'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 6,
                            content: {
                                block: 'link',
                                mods: {'fa-icon': 'chevron-circle-left'},
                                url: '#',
                                content: 'Свернуть меню'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'article',
            mods: {type: 'console'},
            content: [
                {
                    block: 'text',
                    mods: {type: 'heading-large'},
                    content: 'Консоль'
                },
                {
                    block: 'welcome',
                    content: [
                        {
                            elem: 'heading',
                            content: [
                                {
                                    block: 'text',
                                    mods: {type: 'heading-large'},
                                    content: 'Добро пожаловать в %projectname%!'
                                },
                                {
                                    block: 'link',
                                    url: '#',
                                    mods: {type: 'close', 'fa-icon': 'times-circle', theme: 'turquoise'},
                                    content: 'Закрыть'
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: {type: 'heading-medium'},
                            content: 'Мы собрали несколько ссылок для Вашего удобства:'
                        },
                        {
                            block: 'table',
                            content: {
                                elem: 'col',
                                content: [
                                    {
                                        elem: 'row',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {type: 'heading-medium'},
                                                content: 'Для начала'
                                            },
                                            {
                                                block: 'button',
                                                mods: {theme: 'turquoise', type: 'large'},
                                                text: 'Настройте свой сайт'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'span',
                                                content: 'или'
                                            },
                                            {
                                                block: 'link',
                                                mods: {type: 'inline', theme: 'turquoise'},
                                                url: '#',
                                                content: 'выберите другую тему'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'row',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {type: 'heading-medium'},
                                                content: 'Следующие шаги'
                                            },
                                            {
                                                block: 'link',
                                                url: '#',
                                                mods: {theme: 'turquoise', 'fa-icon': 'file-text'},
                                                content: 'Напишите свою первую запись'
                                            },
                                            {
                                                block: 'link',
                                                url: '#',
                                                mods: {theme: 'turquoise', 'fa-icon': 'pencil-square-o'},
                                                content: 'Создайте запись &#171;обо мне&#187;'
                                            },
                                            {
                                                block: 'link',
                                                url: '#',
                                                mods: {theme: 'turquoise', 'fa-icon': 'eye'},
                                                content: 'Просмотрите свой сайт'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'row',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {type: 'heading-medium'},
                                                content: 'Другие действия'
                                            },
                                            {
                                                block: 'link',
                                                url: '#',
                                                mods: {theme: 'turquoise', 'fa-icon': 'cogs'},
                                                content: 'Настройте виджеты и меню'
                                            },
                                            {
                                                block: 'link',
                                                url: '#',
                                                mods: {theme: 'turquoise', 'fa-icon': 'commentz'},
                                                content: 'Включите или выключите комментарии'
                                            },
                                            {
                                                block: 'link',
                                                url: '#',
                                                mods: {theme: 'turquoise', 'fa-icon': 'wrench'},
                                                content: 'Узнайте больше о %projectname%'
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium', 'fa-icon': 'caret-up'},
                                            content: 'На виду'
                                        },
                                        {
                                            block: 'table',
                                            content: {
                                                elem: 'col',
                                                content: [
                                                    {
                                                        elem: 'row',
                                                        content: [
                                                            {
                                                                block: 'link',
                                                                url: '#',
                                                                mods: {theme: 'turquoise', 'fa-icon': 'thumb-tack'},
                                                                content: 'n запись'
                                                            },
                                                            {
                                                                block: 'link',
                                                                url: '#',
                                                                mods: {theme: 'turquoise', 'fa-icon': 'commentz'},
                                                                content: 'n комментария'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'row',
                                                        content: {
                                                            block: 'link',
                                                            url: '#',
                                                            mods: {theme: 'turquoise', 'fa-icon': 'file'},
                                                            content: 'n страница'
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'bottom',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: '%projectname% с темой оформления'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    url: '#',
                                                    content: 'turquoise'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium', 'fa-icon': 'caret-up'},
                                            content: 'Активность'
                                        },
                                        {
                                            block: 'publish',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {type: 'heading'},
                                                    content: 'Недавно добавлены'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Сегодня, 12:11'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {theme: 'turquoise'},
                                                    url: '#',
                                                    content: 'Hello, world!'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'comment',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {type: 'heading-medium'},
                                                    content: 'Комментарии'
                                                },
                                                {
                                                    block: 'table',
                                                    content: [
                                                        {
                                                            elem: 'col',
                                                            content: [
                                                                {
                                                                    elem: 'row',
                                                                    content:[
                                                                        {
                                                                            block: 'image',
                                                                            url: 'https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/user-512.png',
                                                                            width: 50,
                                                                            height: 50
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                                            content: '%someone%'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'к записи'
                                                                        },
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                                            content: '%notename%'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'col',
                                                            content: [
                                                                {
                                                                    elem: 'row',
                                                                    content:[
                                                                        {
                                                                            block: 'image',
                                                                            url: 'https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/user-512.png',
                                                                            width: 50,
                                                                            height: 50
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                                            content: '%someone%'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'к записи'
                                                                        },
                                                                        {
                                                                            block: 'link',
                                                                            url: '#',
                                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                                            content: '%notename%'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block : 'control-group',
                                                    content : [
                                                        {
                                                            block : 'button',
                                                            mods : { theme : 'islands', size : 'm' },
                                                            text : 'Все'
                                                        },
                                                        {
                                                            block : 'button',
                                                            mods : { theme : 'islands', size : 'm' },
                                                            text : 'Ожидающие (0)'
                                                        },
                                                        {
                                                            block : 'button',
                                                            mods : { theme : 'islands', size : 'm' },
                                                            text : 'Одобренные'
                                                        },
                                                        {
                                                            block : 'button',
                                                            mods : { theme : 'islands', size : 'm' },
                                                            text : 'Спам'
                                                        },
                                                        {
                                                            block : 'button',
                                                            mods : { theme : 'islands', size : 'm' },
                                                            text : 'Корзина (0)'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'center'
                        },
                        {
                            elem: 'right',
                            content: [
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium', 'fa-icon': 'caret-up'},
                                            content: 'Быстрый черновик'
                                        },

                                        {
                                            block: 'input',
                                            mods: {type: 'medium'},
                                            placeholder: 'Заголовок'
                                        },
                                        {
                                            block: 'textarea',
                                            placeholder: 'О чем хотите написать?'
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'turquoise', type: 'medium'},
                                            content: 'Сохранить'
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
