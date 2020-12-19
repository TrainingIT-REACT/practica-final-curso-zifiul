import React, { FC, useState, useCallback, useMemo } from 'react';
import {
    IconButton,
    Menu,
    Badge,
    PopoverOrigin,
    MenuProps,
    withStyles,
} from '@material-ui/core';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        minWidth: 300,
        marginTop: 40,
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

export type IconMenuProps = {
    id: string;
    label: string;
    badge?: string;
    badgeColor?: 'primary' | 'secondary' | 'default' | 'error';
    icon: React.ReactElement;
    children: React.ReactNode;
};

export const IconMenu: FC<IconMenuProps> = (props: IconMenuProps) => {
    const { id, label, icon, badge, badgeColor, children } = props;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);

    const handleOpenMenu = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        },
        []
    );

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const anchorOrigin = useMemo<PopoverOrigin>(
        () => ({ vertical: 'top', horizontal: 'right' }),
        []
    );

    return (
        <>
            <IconButton
                aria-label={label}
                aria-controls={id}
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit">
                <Badge badgeContent={badge} color={badgeColor || 'secondary'}>
                    {icon}
                </Badge>
            </IconButton>
            <StyledMenu
                anchorEl={anchorEl}
                anchorOrigin={anchorOrigin}
                id={id}
                keepMounted={true}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isOpen}
                onClose={handleMenuClose}>
                {children}
            </StyledMenu>
        </>
    );
};
