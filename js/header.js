async function loadHeader(){
  const root = document.getElementById('site-header');
  if(!root) return;

  const res = await fetch('components/header.html');
  root.innerHTML = await res.text();
}
loadHeader();