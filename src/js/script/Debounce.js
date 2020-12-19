// Limita quantidade de execuções do scroll
export default function debounce(funcao, tempo) {
  let timer = null;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(funcao, tempo);
  };
}
