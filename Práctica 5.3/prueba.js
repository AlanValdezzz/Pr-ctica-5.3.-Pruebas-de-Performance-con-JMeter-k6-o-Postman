// Esto es unaprueba de performance con k6 a la api de jsonplaceholder
// Son 10 usuarios virtuales durante unos 20 segundos
//
// Los resultados deberian dar esto aproximadamente:
// 190 solicitudes 
// 50 ms de tiempo promedio
// 0 errores
// Significa que la api respondio bien y rapido, sin ningun error



import http from 'k6/http';
import { check, sleep } from 'k6';



// 10 usuarios por unos 20 segundos de duración
export const options = {
  vus: 10,
  duration: '20s'
};


export default function () {


  // aqui se pide el post 1 a la api
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1');



  // revisa que responda 200
  check(res, {
    'status es 200': (r) => r.status === 200,
  });



  sleep(1);
}