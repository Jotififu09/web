const F = {
  g: {
    n: "González Patiño",
    c: "#0e7c7b",
    ego: "Joseph González",
    t: "Managua como punto de encuentro: raíces de Chile, Chontales, Bonanza y Masaya. Su máxima expresión intercultural es Panadería La Chilena."
  },
  r: {
    n: "Ríos Lara",
    c: "#b8741a",
    ego: "Manuel A. Ríos Lara",
    t: "Familia mestiza y urbana de Managua, unida en torno a la bisabuela Juana Gripina Chávez (fallecida, dic 2024). Hay familias recompuestas y movilidad a Chontales, Matagalpa, El Rama y España."
  },
  e: {
    n: "Estrada Reyes",
    c: "#9b2c5a",
    ego: "María Mercedes Estrada",
    t: "Cinco generaciones entre León y Ciudad Sandino. De León vienen el indio viejo y las alfombras pasionarias de Semana Santa."
  }
};

const P = `g|Tomás Carmona|2|Bisabuelo materno|Managua|Español|Albañil|Asados y sopas dominicales|Trabajo manual en desarrollo urbano
g|Ruth Averhoff|2|Bisabuela materna|Chontales|Miskito y español|Ama de casa|Asados y sopas dominicales|Chontales a Managua
g|Fernando Patiño|2|Bisabuelo materno|Managua|Español|No documentado|Organizador de La Purísima y altares|Integración comunitaria
g|Ana Vargas|2|Bisabuela materna|Managua|Español|No documentado|Organizadora de La Purísima y altares|—
g|Luis Bustamante|2|Bisabuelo paterno|Curicó, Chile|Español|No documentado|—|Migración internacional
g|Auristela Torres|2|Bisabuela paterna|Curicó, Chile|Español|No documentado|—|Migración internacional
g|Bisabuelos paternos|2|Bisabuelos paternos|Masaya|Español|No documentado|—|Nombres no documentados (pérdida de memoria generacional)
g|Ruth Carmona|3|Abuela materna|Bonanza|Miskito y español|Trabajadora de supermercado|Comida dominical|Bonanza a Managua
g|Fernando Patiño|3|Abuelo materno|Managua|Español|Camionero y busero|—|Transporte urbano e interurbano
g|Norma Bustamante|3|Abuela paterna|Curicó, Chile|Español|Chef|Empanadas chilenas|Chile a Nicaragua
g|Efraín González|3|Abuelo paterno|Managua|Español|Zapatero|—|Oficio artesanal
g|Judith Patiño|4|Madre|Managua|Español|Administradora de empresas|Administra el negocio familiar|Ascenso social
g|Mauricio González|4|Padre|Managua|Español|Panadero y pastelero|Fundó Panadería La Chilena|Fusión del legado culinario materno
g|Joseph González|5|EGO|Managua|Español|Estudiante de Ing. en Sistemas|Digitaliza el negocio familiar|—
r|Juana Gripina Chávez|2|Bisabuela (fallecida)|Pacífico/Carazo|Español, chorotega|No documentado|Tumba es punto de encuentro|Pilar de unión
r|Marixa C. Chávez|3|Abuela|Managua|Español|Ama de casa|Visita tumba familiar|Cambios de barrio
r|Paula V. Chávez|3|Tía abuela|Managua|Español|No documentado|No documentada|No documentada
r|Gloria M. Chávez|3|Tía abuela|Managua|Español|No documentado|No documentada|No documentada
r|María de J. Lara Chávez|4|Tía|Managua|Español|No documentado|No documentada|No documentada
r|Ernesto Pérez|4|Tío político|Managua (urbano)|Español|No documentado|No documentada|No documentada
r|Lizeth Lara Chávez|4|Madre|Managua|Español, mestiza|Ama de casa|Sin tradición heredada|Sin migración
r|Fernando Medina|4|Ex pareja (fallecido)|Chontales|Español, mestizo|Ganadero|No documentada|Migración laboral a Managua
r|Manuel S. Ríos O.|4|Padre|Managua|Español, mestizo|Administrador|Sin tradición heredada|Migración interna
r|Luis E. Guido Chávez|4|Tío|El Rama (RACCS)|Español, creole|No documentado|No documentada|El Rama a Managua
r|Carmen Soto|4|Tía política|Matagalpa|Español, mestiza|No documentado|No documentada|Matagalpa a Managua
r|Brittany A. Pérez Lara|5|Prima|Managua|Español|No documentado|No documentada|No documentada
r|Liam De J. Pérez Lara|5|Primo|Managua|Español|No documentado|No documentada|No documentada
r|Jordan Medina Lara|5|Medio hermano|Managua|Español, mestizo|No documentado|No documentada|Reside en España (6 años)
r|Manuel A. Ríos Lara|5|EGO|Managua|Español, mestizo|Estudiante de Ing. en Sistemas|Sin tradición|Mudanza en Managua
r|Mayeli L. Ríos Lara|5|Hermana|Managua|Español, mestiza|No documentado|No documentada|No documentada
r|Jareth E. Guido Soto|5|Primo|Managua|Español, mestizo|No documentado|No documentada|Managua a Matagalpa
e|José F. Reyes|2|Bisabuelo materno|León|Español, mestizo|Agricultura|Devoto Virgen de Mercedes|Origen de la línea materna
e|Susana Caballero|2|Bisabuela materna|León|Español, mestiza|Costura|Devota Virgen de Mercedes|Origen de la línea materna
e|Marco A. Estrada|2|Bisabuelo paterno|Ciudad Sandino|Español, mestizo|Comercio local|No documentada|Origen línea paterna
e|María S. Dávila|2|Bisabuela paterna|Ciudad Sandino|Español, mestiza|Comercio local|No documentada|Origen línea paterna
e|Ana Jenny|4|Tía materna|León|Español|No documentado|No documentada|De León a Managua
e|Darvin|4|Tío materno|León|Español|No documentado|No documentada|De León a Managua
e|Heidi Reyes Caballero|4|Madre|León|Español, mestiza|Docente de primaria|Receta del indio viejo leonés|León a Ciudad Sandino
e|Dennis Estrada Dávila|4|Padre|Ciudad Sandino|Español, mestizo|Técnico electricista|Fiestas locales|Arraigo urbano
e|Javier Antonio|4|Tío paterno|Ciudad Sandino|Español|No documentado|No documentada|No documentada
e|Evelyn|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tío Marco
e|Marco Antonio|5|Primo|Ciudad Sandino|Español|No documentado|No documentada|Familia Tío Marco
e|Heydi|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tío Marco
e|José Ángel|5|Primo|Ciudad Sandino|Español|No documentado|No documentada|Familia Tía Norma
e|Franklin|5|Primo|Ciudad Sandino|Español|No documentado|No documentada|Familia Tía Norma
e|Aracelly|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tía Norma
e|Juan Sebastián Estrada|5|Hermano|Ciudad Sandino|Español, mestizo|No documentado|No documentada|Arraigo urbano
e|María Mercedes Estrada|5|EGO|Ciudad Sandino|Español, mestiza|Estudiante universitaria|Viaja a León en Semana Santa|Reside en Ciudad Sandino
e|Denisse G. Estrada|5|Hermana|Ciudad Sandino|Español, mestiza|No documentado|No documentada|Arraigo urbano
e|Heyling|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tía Johanna
e|Hassly|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tía Johanna
e|María Alejandra|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tía Johanna
e|Norma|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tío Javier
e|Arelly|5|Prima|Ciudad Sandino|Español|No documentado|No documentada|Familia Tío Javier
e|Pedro|5|Primo|Ciudad Sandino|Español|No documentado|No documentada|Familia Tío Javier`.split("\n").map((l, i) => {
  const a = l.split("|");
  return { id: i, f: a[0], n: a[1], g: +a[2], rol: a[3], o: a[4], i: a[5], of: a[6], tr: a[7], mv: a[8] };
});

const RT = [
  ["g", "Chile (Curicó) → Managua", "Familia Bustamante Torres, línea paterna"],
  ["g", "Chontales → Managua", "Ruth Averhoff, línea materna"],
  ["g", "Bonanza → Managua", "Ruth Carmona, abuela materna"],
  ["g", "Masaya", "Bisabuelos paternos, nombres no documentados"],
  ["r", "El Rama → Managua", "Rodrigo Guido"],
  ["r", "Chontales → Managua", "Fernando Medina, por trabajo"],
  ["r", "Managua ⇄ Matagalpa", "Luis y Jareth, viajes familiares"],
  ["r", "Managua → España", "Jordan Medina Lara, hace 6 años, por ingresos"],
  ["e", "León → Ciudad Sandino", "Heidi Reyes; regresa a León en Semana Santa"],
  ["e", "Ciudad Sandino (Managua)", "Línea paterna Estrada Dávila, sin migración"]
];

const PC = [
  ["Identidad mestiza y español como lengua", "Ríos Lara: 15 de 15 personas (100%). Estrada Reyes: 100% de G2 a G5. González Patiño: la mayoría, con 2 bisabuelas/abuelas que hablan miskito y español.", 100],
  ["Arraigo en el Pacífico urbano", "Ríos Lara: 14 de 15 nacieron en Managua (93%). Todas las líneas Estrada Reyes proceden de León y Ciudad Sandino. Las rutas de González Patiño convergen en Managua.", 93],
  ["Poca movilidad permanente", "Ríos Lara: 11 de 15 (73%) no han migrado. Cuando hay movimiento, tiene una causa concreta: trabajo, hijos o ingresos.", 73]
];

const PD = [
  ["Lenguas", "Solo González Patiño conserva el miskito (línea materna: Chontales y Bonanza). Las otras dos familias son hispanohablantes.", 0],
  ["Tipo de movilidad", "Internacional por asimilación (Chile), laboral (Chontales), familiar (Matagalpa), a España por ingresos y de retorno ritual (León en Semana Santa).", 0],
  ["Tradiciones", "González Patiño: gastronomía y La Purísima. Estrada Reyes: indio viejo y alfombras pasionarias. Ríos Lara: tumba de la bisabuela, con 75% de participación en G3 y 0% en G4.", 75]
];

const $ = s => document.querySelector(s);
const col = f => F[f].c;
const tabs = [
  ["inicio", "Inicio"],
  ["arbol", "Árbol"],
  ["rutas", "Rutas"],
  ["patrones", "Patrones"],
  ["reflex", "Memorias"],
  ["info", "Créditos"]
];

$("#nav").innerHTML = tabs.map(t => `<button data-t="${t[0]}">${t[1]}</button>`).join("");

function go(t) {
  document.querySelectorAll(".sec").forEach(s => s.classList.toggle("on", s.id == t));
  document.querySelectorAll("nav button").forEach(b => b.classList.toggle("on", b.dataset.t == t));
  scrollTo(0, 0);
}

$("#nav").onclick = e => {
  if (e.target.dataset.t) go(e.target.dataset.t);
};

$("#fams").innerHTML = Object.keys(F).map(k => `
  <button class="fam" style="--c:${col(k)}" data-f="${k}">
    <b>Familia ${F[k].n}</b><br>
    <span style="color:var(--mu)">EGO: ${F[k].ego}. ${F[k].t}</span>
  </button>`).join("");

$("#fams").onclick = e => {
  const b = e.target.closest("[data-f]");
  if (b) {
    $("#famSel").value = b.dataset.f;
    draw();
    go("arbol");
  }
};

$("#famSel").innerHTML = Object.keys(F).map(k => `<option value="${k}">Familia ${F[k].n}</option>`).join("");
$("#famSel").onchange = draw;

function draw() {
  const f = $("#famSel").value;
  let rowsHtml = "";
  
  [2, 3, 4, 5].forEach(g => {
    const l = P.filter(p => p.f == f && p.g == g);
    if (l.length) {
      rowsHtml += `<div class="tree-row" style="--c:${col(f)}">` + 
           l.map(p => `
             <div class="tree-node-wrapper" style="--c:${col(f)}">
               <div class="tree-node" style="--c:${col(f)}" data-i="${p.id}">
                 <b>${p.n}</b>
                 <small>${p.rol}</small>
               </div>
             </div>
           `).join("") + 
           `</div>`;
    }
  });
  
  $("#tree").innerHTML = `<div class="tree-container">${rowsHtml}</div>`;
  $("#det").innerHTML = "<i>Toca a una persona para ver su ficha etnográfica.</i>";
}

$("#tree").onclick = e => {
  const b = e.target.closest(".tree-node");
  if (!b) return;
  
  document.querySelectorAll(".tree-node").forEach(c => c.classList.remove("on"));
  b.classList.add("on");
  
  const p = P[b.dataset.i];
  
  $("#det").innerHTML = `
    <h3 style="color:${col(p.f)}">${p.n}</h3>
    <dl>
      ${[["Parentesco", p.rol], ["Lugar de origen", p.o], ["Idioma(s)", p.i], ["Oficio", p.of], ["Tradición", p.tr], ["Movilidad", p.mv]]
        .map(x => `<dt>${x[0]}</dt><dd>${x[1]}</dd>`).join("")}
    </dl>`;
    
  $("#det").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

let rf = "all";

function rts() {
  $("#rf").innerHTML = [["all", "Todas"]].concat(Object.keys(F).map(k => [k, F[k].n]))
    .map(x => `<button class="chip ${rf == x[0] ? "on" : ""}" style="--c:${x[0] == "all" ? "var(--tx)" : col(x[0])}" data-r="${x[0]}">${x[1]}</button>`).join("");
  
  $("#rl").innerHTML = RT.filter(r => rf == "all" || r[0] == rf)
    .map(r => `
      <div class="route" style="border-left:5px solid ${col(r[0])};padding-left:10px">
        <b>${r[1]}</b><br><span style="color:var(--mu)">${r[2]}</span>
      </div>`).join("");
}

$("#rf").onclick = e => {
  if (e.target.dataset.r) {
    rf = e.target.dataset.r;
    rts();
  }
};

rts();

const pr = (a, id) => {
  $(id).innerHTML = a.map(x => `
    <div class="card">
      <b>${x[0]}</b>
      <p style="margin:.3em 0">${x[1]}</p>
      ${x[2] ? `<div class="bar" style="--c:var(--g)"><i style="width:${x[2]}%"></i></div>` : ""}
    </div>`).join("");
};

pr(PC, "#pc");
pr(PD, "#pd");

let M = [];
try {
  M = JSON.parse(localStorage.getItem("mem") || "[]");
} catch (e) {}

function mem() {
  $("#ml").innerHTML = M.length 
    ? M.map(m => `<div class="card"><b>${m.n || "Anónimo"}</b><p style="margin:.3em 0">${m.t}</p></div>`).join("") 
    : '<div class="card"><i>Aún no hay memorias. Escribe la primera.</i></div>';
}

$("#mb").onclick = () => {
  const t = $("#mt").value.trim();
  if (!t) {
    $("#mt").focus();
    return;
  }
  M.unshift({
    n: $("#mn").value.trim().replace(/</g, "&lt;"),
    t: t.replace(/</g, "&lt;")
  });
  try {
    localStorage.setItem("mem", JSON.stringify(M));
  } catch (e) {}
  $("#mt").value = "";
  mem();
};

mem();
draw();
go("inicio");
