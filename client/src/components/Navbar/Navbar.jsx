import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

export function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const theme = useMantineTheme('dark');

    return (
        <Box theme={theme} className={classes.box} >
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Link to='/' className={classes.logo_link}>
                        <div className={classes.logo_container}>
                            <img alt='Logo' src={Logo} width={45} height={40} className={classes.logo} />
                            <h3><span className={classes.span}>C</span>ode<span className={classes.span}>V</span>erse</h3>
                        </div>
                    </Link>
                    <Group h="100%" gap={10} visibleFrom="sm">
                        <Link to='#!' className={classes.link}>
                            Home
                        </Link>
                        <Link to='/editor' className={classes.link}>
                            Editor
                        </Link>
                        <Link to='#!' className={classes.link}>
                            Nosotros
                        </Link>
                        <Link to='#!' className={classes.link}>
                            Buscar Proyectos
                        </Link>
                        <Link to='#!' className={classes.link}>
                            Ranking
                        </Link>
                    </Group>
                    <Group visibleFrom="sm">
                        <Link to='/login'><Button variant="default">Log in</Button></Link>
                        <Button color='#701616' >Sign up</Button>
                    </Group>
                    {/* Burger para abrir navbar*/}
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>
            {/* Navbar en responsividad*/}
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="70%"
                padding="md"
                title={<h3><span className={classes.span}>C</span>ode<span className={classes.span}>V</span>erse</h3>}
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />
                    <Link to='#!' className={classes.link}>
                        Home
                    </Link>
                    <Link to='/editor' className={classes.link}>
                        Editor
                    </Link>
                    <Link to='#!' className={classes.link}>
                        Nosotros
                    </Link>
                    <Link to='#!' className={classes.link}>
                        Buscar Proyectos
                    </Link>
                    <Link to='#!' className={classes.link}>
                        Ranking
                    </Link>
                    <Divider my="sm" />
                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button color='#701616'>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}