import ListItem from "./list-item"



function SideBar() {
    return (
        <aside>
            <nav>
                <ul>
                    <ListItem
                        text="Início"
                        isActive
                        activeIcon="images/home-ativo.png"
                        inactiveIcon="images/home-inativo.png"
                    />
                    <ListItem
                        text="Mais vistas"
                        activeIcon="images/mais-vistas-ativo.png"
                        inactiveIcon="images/mais-vistas-inativo.png"
                    />
                    <ListItem
                        text="Mais curtidas"
                        activeIcon="images/mais-curtidas-ativo.png"
                        inactiveIcon="images/mais-curtidas-inativo.png"
                    />
                    <ListItem
                        text="Novas"
                        activeIcon="images/novas-ativo.png"
                        inactiveIcon="images/novas-inativo.png"
                    />
                    <ListItem
                        text="Surpreenda-me"
                        activeIcon="images/surpreenda-me-ativo.png"
                        inactiveIcon="images/surpreenda-me-inativo.png"
                    />
                </ul>
            </nav>
        </aside>
    )
}

export default SideBar