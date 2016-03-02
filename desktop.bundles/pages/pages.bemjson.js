module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'pages.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'pages.min.js'}],
    content: [
        {
            block: 'article',
            mods: {type: 'pages'},
            content: [
                {
                    block: 'text',
                    tag: 'span',
                    mods: {'fa-icon': 'file', type: 'heading-large'},
                    content: 'Изменить страницу'
                },
                {
                    block: 'button',
                    mods: {theme: 'turquoise', type: 'small'},
                    text: 'Добавить новую'
                },
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    block: 'input',
                                    mods: {type: 'large'},
                                    placeholder: 'Введите заголовок'
                                },
                                {
                                    block: 'inline',
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            mods: {theme: 'bold'},
                                            content: 'Постоянная ссылка:'
                                        },
                                        {
                                            block: 'link',
                                            url: '=content',
                                            mods: {type: 'inline'},
                                            content: 'https://github.com'
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey', type: 'radius'},
                                            text: 'Изменить'
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey', type: 'radius'},
                                            text: 'Показать страницу'
                                        }
                                    ]
                                },
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            elem: 'head',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Загрузить/вставить'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'list-alt'}
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'video-camera'}
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'music'}
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'star'}
                                                },
                                                {
                                                    block: 'radio-group',
                                                    val: 1,
                                                    mods: {theme: 'grey', type: 'button', focused: true},
                                                    options: [
                                                        {val: 1, text: 'Визуально'},
                                                        {val: 2, text: 'HTML'}
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'body',
                                            content: [
                                                {
                                                    block: 'inline',
                                                    mods: {type: 'text-format'},
                                                    content: [
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'boldd'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'italic'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'underline'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'strikethrough'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'list-ul'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'list-ol'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'outdent'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'indent'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'align-left'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'align-center'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'align-justify'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'align-right'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'linkz'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'chain-broken'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'picture-o'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        }

                                                    ]
                                                },
                                                {
                                                    block: 'inline',
                                                    mods: {type: 'text-format'},
                                                    content: [
                                                        {
                                                            block: 'select',
                                                            attrs: {style: 'margin-right: 10px'},
                                                            mods: {mode: 'radio', theme: 'islands', size: 's'},
                                                            val: 1,
                                                            options: [
                                                                {val: 1, text: 'Размер шрифта', disabled: true},
                                                                {val: 2, text: '2^n'},
                                                                {val: 3, text: '2^n'},
                                                                {val: 4, text: '2^n'},
                                                                {val: 5, text: '2^n'},
                                                                {val: 6, text: '2^n'},
                                                                {val: 7, text: '2^n'},
                                                                {val: 8, text: '2^n'},
                                                                {val: 9, text: '2^n'}
                                                            ]
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'copy'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'cut'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'clipboard'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'print'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'fontz'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'superscript'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'subscript'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'film'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'tablez'},
                                                            attrs: {style: 'margin-right: 10px'}
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'textarea',
                                                    placeholder: 'Введите текст'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'bottom',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Количество слов: n'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {side: 'right'},
                                                    tag: 'span',
                                                    content: 'Черновик сохранен в DateTime'
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
                                            tag: 'span',
                                            mods: {type: 'heading-medium', theme: 'bold'},
                                            content: 'Опубликовать'
                                        },
                                        {
                                            block: 'inline',
                                            content: {
                                                block: 'button',
                                                mods: {type: 'radius', side: 'right', theme: 'grey'},
                                                text: 'Просмотреть изменения'
                                            }
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Статус:'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: {theme: 'bold'},
                                                    content: 'Черновик'
                                                },
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'Изменить'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Видимость:'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: {theme: 'bold'},
                                                    content: 'Открыто'
                                                },
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'Изменить'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {'fa-icon': 'calendar'},
                                                    tag: 'span',
                                                    content: 'Опубликовать:'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: {theme: 'bold'},
                                                    content: 'Сразу'
                                                },
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'Изменить'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'bottom',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'red'},
                                                    content: 'Удалить'
                                                },
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'turquoise', type: 'small', side: 'right'},
                                                    content: 'Опубликовать'
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
                                            mods: {type: 'heading-medium', theme: 'bold'},
                                            content: 'Атрибуты страницы'
                                        },
                                        {
                                            elem: 'body',
                                            content: [
                                                {
                                                    block: 'inline',
                                                    mods: {type: 'select'},
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {theme: 'bold'},
                                                            tag: 'span',
                                                            content: 'Родительская'
                                                        },
                                                        {
                                                            block: 'select',
                                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                                            val: 1,
                                                            options: [
                                                                {val: 1, text: '(нет родительских)'},
                                                                {val: 2, text: 'Страницы'},
                                                                {val: 3, text: 'Заметки'}
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'inline',
                                                    mods: {type: 'select'},
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {theme: 'bold'},
                                                            tag: 'span',
                                                            content: 'Шаблон'
                                                        },
                                                        {
                                                            block: 'select',
                                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                                            val: 1,
                                                            options: [
                                                                {val: 1, text: 'Базовый шаблон'},
                                                                {val: 2, text: 'typesomethinhere'},
                                                                {val: 3, text: 'typesomethinhere'}
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'inline',
                                                    mods: {type: 'select'},
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {theme: 'bold'},
                                                            tag: 'span',
                                                            content: 'Порядок'
                                                        },
                                                        {
                                                            block: 'select',
                                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                                            val: 1,
                                                            options: [
                                                                {val: 1, text: '1'},
                                                                {val: 2, text: '2'},
                                                                {val: 3, text: '3'},
                                                                {val: 4, text: '4'},
                                                                {val: 5, text: '5'},
                                                                {val: 6, text: '6'},
                                                                {val: 7, text: '7'},
                                                                {val: 8, text: '8'},
                                                                {val: 9, text: '9'},
                                                                {val: 10, text: '10'}
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
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
