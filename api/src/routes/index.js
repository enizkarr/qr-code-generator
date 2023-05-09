// index.js
import qrcode from './qrcode.routes';
export default app => {
app.use('/', qrcode);
}