const doc = document.implementation.createHTMLDocument();
const doctype = document.implementation.createDocumentType('html', '', '');
doc.insertBefore(doctype, doc.documentElement);
const html = doc.createElement('html');
doc.appendChild(html);
const head = doc.createElement('head');
html.appendChild(head);
const metaCharset = doc.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);
const metaViewport = doc.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
head.appendChild(metaViewport);
const title = doc.createElement('title');
title.textContent = 'Vikingos, mucho más que lo épico';
head.appendChild(title);
const linkStylesheet1 = doc.createElement('link');
linkStylesheet1.setAttribute('rel', 'stylesheet');
linkStylesheet1.setAttribute('href', './css/styles.css');
head.appendChild(linkStylesheet1);
const linkFavicon = doc.createElement('link');
linkFavicon.setAttribute('rel', 'shortcut icon');
linkFavicon.setAttribute('href', './multimedia/logo_favicom.jpg');
linkFavicon.setAttribute('type', 'image/x-icon');
head.appendChild(linkFavicon);
const linkStylesheet2 = doc.createElement('link');
linkStylesheet2.setAttribute('rel', 'stylesheet');
linkStylesheet2.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
head.appendChild(linkStylesheet2);
const metaDescription = doc.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', 'Vikingos: una serie que no te puedes perder para ver acción, historia y emotividad.');
head.appendChild(metaDescription);

const metaKeywords = doc.createElement('meta');
metaKeywords.setAttribute('name', 'keywords');
metaKeywords.setAttribute('content', 'serie, vikingos, Ragnar Lothbrok, historia.');
head.appendChild(metaKeywords);
const body = doc.createElement('body');
html.appendChild(body);
const nav = doc.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');
body.appendChild(nav);
const ul = doc.createElement('ul');
ul.setAttribute('class', 'navbar-nav');
nav.appendChild(ul);
function createNavItem(text, href) {
  const li = doc.createElement('li');
  li.setAttribute('class', 'nav-item');
  const a = doc.createElement('a');
  a.setAttribute('class', 'nav-link');
  a.setAttribute('href', href);
  a.textContent = text;
  li.appendChild(a);
  return li;
}
ul.appendChild(createNavItem('Noticias principales', './pages/pagina_de_noticias.html'));
ul.appendChild(createNavItem('Personajes', './pages/personajes_principales.html'));
ul.appendChild(createNavItem('Contacto', './pages/Contacto.html'));
ul.appendChild(createNavItem('Nosotros', './pages/Nosotros.html'));
const header = doc.createElement('header');
header.setAttribute('class', 'bg-primary text-white text-center py-5');
body.appendChild(header);
const img = doc.createElement('img');
img.setAttribute('src', './multimedia/vikingos_portada.jpg');
img.setAttribute('alt', 'Vikingos-portada');
header.appendChild(img);
const h1 = doc.createElement('h1');
h1.textContent = 'La mejor serie de los últimos tiempos';
header.appendChild(h1);
const p = doc.createElement('p');
p.textContent = 'Sigue las aventuras de Ragnar Lothbrok, el héroe más grande de su época. La serie narra las sagas de la banda de hermanos vikingos de Ragnar y su familia, cuando él se levanta para convertirse en el rey de las tribus vikingas.';
header.appendChild(p);
const container = doc.createElement('div');
container.setAttribute('class', 'container mt-5');
body.appendChild(container);
const row = doc.createElement('div');
row.setAttribute('class', 'row');
container.appendChild(row);
const col1 = doc.createElement('div');
col1.setAttribute('class', 'col-md-6');
row.appendChild(col1);
const col2 = doc.createElement('div');
col2.setAttribute('class', 'col-md-6');
row.appendChild(col2);
const h2Col1 = doc.createElement('h2');
h2Col1.textContent = 'Sobre la serie';
col1.appendChild(h2Col1);
const pCol1 = doc.createElement('p');
pCol1.textContent = 'Además de ser un guerrero valiente, Ragnar encarna las tradiciones nórdicas de la devoción a los dioses, la leyenda dice que él era un descendiente directo de Odín, el dios de la guerra y los guerreros.';
col1.appendChild(pCol1);
const h2Col2 = doc.createElement('h2');
h2Col2.textContent = 'Episodios';
col2.appendChild(h2Col2);
const ulCol2 = doc.createElement('ul');
col2.appendChild(ulCol2);
function createLi(text) {
  const li = doc.createElement('li');
  li.textContent = text;
  return li;
}
ulCol2.appendChild(createLi('Temporada 1, 9 episodios: resumen'));
ulCol2.appendChild(createLi('Temporada 2, 10 episodios: resumen'));
ulCol2.appendChild(createLi('Temporada 3, 10 episodios: resumen'));
const footer = doc.createElement('footer');
footer.setAttribute('class', 'bg-dark text-white text-center py-3');
body.appendChild(footer);
const pFooter = doc.createElement('p');
pFooter.textContent = 'Derechos de autor © 2023. Todos los derechos reservados.';
footer.appendChild(pFooter);

function createScript(src) {
  const script = doc.createElement('script');
  script.setAttribute('src', src);
  return script;
}
body.appendChild(createScript('https://code.jquery.com/jquery-3.5.1.slim.min.js'));




