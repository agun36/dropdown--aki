# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Neutral

- Almost White: hsl(0, 0%, 98%)
- Medium Gray: hsl(0, 0%, 41%)
- Almost Black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 18px

### Font

- Family: [Epilogue](https://fonts.google.com/specimen/Epilogue)
- Weights: 500, 700

.header-make {
font-size: var(--font-size);
width: 27%;
font-weight: 700;
}

.header-work {
font-size: var(--font-size);
font-weight: 700;
}

.main {
display: flex;
justify-content: center;
align-items: center;
width: 80%;
margin: auto;
}

.main-header {
display: flex;
align-items: center;
height: 100%;
}

.main-header ul {
margin-top: 10rem;
display: flex;
list-style: none;
align-items: center;
gap: 4rem;
}

.heading {
/_ display: flex; _/
margin-bottom: 3rem;
}

.main-header img {
/_ width: 100%; _/
height: 100%;
max-width: 400px;
}

.main-header p {
width: 60%;
font-size: 18px;
}

.main-header button {
width: 10rem;
height: 3rem;
border-radius: 1rem;
background: var(--color-Black);
color: var(--color-White);
margin-top: 3rem;
}

.header {
margin: 4rem;
display: flex;
flex-wrap: wrap;
gap: 3rem;
align-items: center;
font-size: var(--font-size);
}

.header_nav-left {
display: flex;
align-items: center;
gap: 2rem;
width: 100%;

}

.nav-list {
display: flex;
gap: 2rem;
list-style: none;
width: 100%;
}

.right {
list-style: none;
display: flex;
gap: 2rem;
width: 100%;
justify-content: end;
flex: 100%;
}

.menu-icon {
display: none;
}

.dropdown-menu {
height: auto;
}

/\* .nav-list {
display: flex;

}

.dropdown-menu li {
line-height: 2;

width: 100%;
list-style: none;
font-size: var(--font-size);
}

.icon-dropdown {
display: flex;
align-items: center;
height: 2rem;
gap: 2rem;
font-size: 18px;
}

.menu-icon {
display: none;
margin-left: auto;
}

.dropdown {
height: auto;
}

.dropdown-menu {

color: var(--color-Gray);
}

.right {
width: 100%;
display: flex;

align-items: center;
gap: 2rem;

padding-right: 3rem;
}

.reg {
width: 14rem;
text-align: center;
border: 1px solid var(--color-Gray);
height: 3rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3rem;

}

.dropdownlist {
margin: 1rem;
}

\*/
@media screen and (max-width: 600px) {
.menu-icon {
display: block;
position: absolute;
z-index: 12;
right: 0;

    /* right: 4rem; */

}

.header {
/_ align-items: stretch; _/
}

.heading {
/_ display: flex; _/
height: auto;
width: 100%;
font-size: 3rem;
}

.header*nav-left {
/* height: auto;
\_/

}

.reg {
width: 16rem;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid var(--color-Gray);
border-radius: 1rem;
}

.main-header {
flex-direction: column-reverse;
/_ margin: auto; _/
/_ width: 100%; _/
/_ text-align: center; _/
}

/\* #hide-item {
display: block;
}

.header_nav-left {
height: auto;
}

.nav-list {
flex-direction: column;
min-width: 20rem;
min-height: 100vh;

    background: var(--color-White);
    padding: 3rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;
    height: auto;

}

.right {

    flex-direction: column;
    margin-left: 4rem;
    margin-top: 7rem;

}

.header_nav-logo {
font-size: var(--font-size-mobile);
} \*/
.nav-list {

    flex-direction: column;
    min-width: 20rem;
    min-height: 100vh;

    background: var(--color-White);
    padding: 3rem;
    position: absolute;
    right: 0;
    /* left: 0; */
    top: 0;
    z-index: 2;

}

.dropdown li {
height: auto;
}

.right {
position: absolute;
z-index: 2;
flex-direction: column;
left: 58%;
top: 45%;
/_ text-align: center; _/
/_ top: 0; _/
/_ margin-top: 18rem; _/
}
}
