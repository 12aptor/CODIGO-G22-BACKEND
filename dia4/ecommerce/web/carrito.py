class Cart:

    def __init__(self,request):
        self.request = request
        self.session = request.session
        
        cart = self.session.get('cart')
        if not cart:
            cart = self.session['cart'] = {}
            
        self.cart = cart
        
    def add(self,producto,cantidad):
        if(str(producto.id) not in self.cart.keys()):
            self.cart[producto.id] = {
                'producto_id':producto.id,
                'nombre':producto.nombre,
                'cantidad':cantidad,
                'precio':str(producto.precio),
                'imagen':producto.imagen.url,
                'categoria':producto.categoria.nombre,
                'subtotal': str(cantidad * producto.precio)
            }
        else:
            for key,value in self.cart.items():
                if key == str(producto.id):
                    value['cantidad'] = str(int(value['cantidad']) + cantidad)
                    value['subtotal'] = str(float(value['cantidad']) * float(value['precio']))
                    break
                
        self.session['cart'] = self.cart
        self.session.modified = True