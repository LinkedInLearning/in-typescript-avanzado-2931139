import $ from 'jquery';
import { makeA } from 'yfx-in-modules';
import { Main } from './main';
export { makeA as picker };

$(() => {
  console.log('Documento listo para usar jQuery');

  const main = new Main();
});
