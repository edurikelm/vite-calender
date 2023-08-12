const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require('../middlewares/validar-jwt');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.get('/', validarJWT, getEventos);

router.post(
  '/',
  validarJWT,
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom(isDate),
    check('end', 'Fecha de termino es obligatorio').custom(isDate),
    validarCampos,
  ],
  crearEvento
);
router.put('/:id', validarJWT, actualizarEvento);
router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router;
