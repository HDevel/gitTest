block( 'top-menu' ).mod( 'type', 'default' ).content()(
    function(){
        return [
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
                        mods: {'fa-icon': 'userz'},
                        url: '#',
                        content: 'Привет, %user%'
                    }
                ]
            }
        ]
    }
)
