import { useRef, useState } from "react";
import "../CSS/sidebar.css";
import { Link } from "react-router-dom";


const menuItems = [
  {
    name: "Home",
    icon: "https://res.cloudinary.com/dgi90lgbq/image/upload/v1705253502/e3dcfddz27cqo5it5lkf.png",
  },
  {
    name: "Adquisición",
    icon: "https://res.cloudinary.com/dgi90lgbq/image/upload/v1705253502/vozvbmialf33lfqbahiv.png",
    items: ["Generar adquisicion asia", "Generar adquisicion america", "Seguimiento Pedidos",],
  },
  {
    name: "Control De Stock",
    icon: "https://res.cloudinary.com/dgi90lgbq/image/upload/v1705253503/lpdkapxxg6jbfltbsewg.png",
    items: ["Lista Productos", "Manejo de Stock"],
  },
  {
    name: "Ventas y Facturas",
    icon: "https://res.cloudinary.com/dgi90lgbq/image/upload/v1705344193/vj8jq6tlf1ga7kagnznp.png",
    items: ["Ingreso Ventas", "Adm. de Facturas"],
  }
];

const Icon = ({ icon }) => (
  <img className="material-symbols-outlined" src={icon} alt="logo" height={"30px"} width={"30px"}/>
);

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="https://res.cloudinary.com/dgi90lgbq/image/upload/v1705253502/ghlquhk9nqythnia1jcw.png" />
    </button>
    <span>Admin</span>
  </header>
);



const NavButton= ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <img alt="arrow down" src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1705254404/dqvbyntcl9tuy7exunrk.png" width={"15px"} height={"15px"} />}
  </button>
);
const SubNavButton = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
}) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <Link className="SubnavButton" to={`/${name.replaceAll(' ', '-')}`}>{name}</Link>

    {hasSubNav && <img alt="arrow down" src="https://res.cloudinary.com/dgi90lgbq/image/upload/v1705254404/dqvbyntcl9tuy7exunrk.png" width={"15px"} height={"15px"} />}
  </button>
);


const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem,index) => (
          <SubNavButton
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      {menuItems.map((item,index) => (
        <div key={index}>
          {!item.items && (
            <NavButton
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  );
};