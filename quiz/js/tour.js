var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('img/tour3.jpg');


var lugar1 = new PANOLENS.Infospot(40, 'img/ic.png'); 
lugar1.position.set(13, 22, -500); 
lugar1.addHoverText('El artista ha utilizado un lenguaje visual basado en la abstracción geométrica para construir un paisaje mental que trasciende la forma convencional.', -60);
lugar1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">' +
                            'El artista ha utilizado un lenguaje visual basado en la abstracción geométrica para construir un paisaje mental que trasciende la forma convencional.' +
                            '</div>';
panorama.add(lugar1);



var lugar2 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar2.position.set(306, 14, -500,); 
lugar2.addHoverText('El fondo es limpio, vacío, casi clínico en su quietud. El contraste entre el círculo rojo y el blanco inmaculado crea una tensión sutil, como si el color intentara escapar del borde y propagar su energía hacia el infinito' -60);
lugar2.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;"> El fondo es limpio, vacío, casi clínico en su quietud. El contraste entre el círculo rojo y el blanco inmaculado crea una tensión sutil, como si el color intentara escapar del borde y propagar su energía hacia el infinito </div>'; 
panorama.add(lugar2);



var lugar3 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar3.position.set(-183, 52, -500);
lugar3.addHoverText('La elección del rojo es, en sí misma, un acto cargado de simbolismo. Es un color de fuerte connotación emocional, que puede sugerir pasión, peligro, amor o incluso violencia. Aquí, sin embargo, el rojo parece despojado de su narrativa habitual, suspendido en una especie de quietud inquietante.', -50);
lugar3.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;"> La elección del rojo es, en sí misma, un acto cargado de simbolismo. Es un color de fuerte connotación emocional, que puede sugerir pasión, peligro, amor o incluso violencia. Aquí, sin embargo, el rojo parece despojado de su narrativa habitual, suspendido en una especie de quietud inquietante. </div>'; 
panorama.add(lugar3)


var lugar4 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar4.position.set(60, -62, 500);
lugar4.addHoverText('La elección del rojo es, en sí misma, un acto cargado de simbolismo. Es un color de fuerte connotación emocional, que puede sugerir pasión, peligro, amor o incluso violencia. Aquí, sin embargo, el rojo parece despojado de su narrativa habitual, suspendido en una especie de quietud inquietante.', -50);
lugar4.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;"> La elección del rojo es, en sí misma, un acto cargado de simbolismo. Es un color de fuerte connotación emocional, que puede sugerir pasión, peligro, amor o incluso violencia. Aquí, sin embargo, el rojo parece despojado de su narrativa habitual, suspendido en una especie de quietud inquietante. </div>'; 
panorama.add(lugar4)


var lugar5 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar5.position.set(-367, 84, -500);
lugar5.addHoverText('Las capas de marrón se dispersan de forma fluida y casi líquida, como si el color hubiera sido derramado y luego dejado secar en patrones orgánicos. No hay líneas definidas ni bordes rígidos; el café se funde en un espacio nebuloso, insinuando una forma sin llegar a darle una estructura completa.', -60);
lugar5.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">Las capas de marrón se dispersan de forma fluida y casi líquida, como si el color hubiera sido derramado y luego dejado secar en patrones orgánicos. No hay líneas definidas ni bordes rígidos; el café se funde en un espacio nebuloso, insinuando una forma sin llegar a darle una estructura completa.</div>'; 
panorama.add(lugar5)


var lugar6 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar6.position.set(500, -41, -145);
lugar6.addHoverText('Los trazos que surgen de la superficie no se limitan a ser simples manchas; son gestos de una energía contenida, un movimiento que busca comunicarse más allá de la forma. Hay algo profundamente humano en esta obra, como si cada curva y mancha reflejara el flujo de una vida cotidiana, la marcha lenta pero constante de un día marcado por el ritual del café', -60);
lugar6.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">Los trazos que surgen de la superficie no se limitan a ser simples manchas; son gestos de una energía contenida, un movimiento que busca comunicarse más allá de la forma. Hay algo profundamente humano en esta obra, como si cada curva y mancha reflejara el flujo de una vida cotidiana, la marcha lenta pero constante de un día marcado por el ritual del café</div>'; 
panorama.add(lugar6)



var lugar7 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar7.position.set(500, -73, 341);
lugar7.addHoverText('En el vasto espacio del lienzo, el color se convierte en el protagonista absoluto, una sinfonía visual que no requiere de formas definidas ni estructuras reconocibles. ', -60);
lugar7.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">En el vasto espacio del lienzo, el color se convierte en el protagonista absoluto, una sinfonía visual que no requiere de formas definidas ni estructuras reconocibles. </div>'; 
panorama.add(lugar7)



var lugar8 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar8.position.set(-352, -83, 500);
lugar8.addHoverText('En esta obra abstracta, la atmósfera misma se despliega como un vasto lienzo de posibilidades. Las nubes, lejos de ser representaciones figurativas, se transforman en un lenguaje visual fluido y cambiante, un reflejo de la constante transformación de la naturaleza. ', -60);
lugar8.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">En esta obra abstracta, la atmósfera misma se despliega como un vasto lienzo de posibilidades. Las nubes, lejos de ser representaciones figurativas, se transforman en un lenguaje visual fluido y cambiante, un reflejo de la constante transformación de la naturaleza.  </div>'; 
panorama.add(lugar8)


var lugar9 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar9.position.set(-500, -132, 265);
lugar9.addHoverText('Los tonos de blanco, gris, azul pálido y beige se mezclan en una danza sutil, como si fueran vapores suspendidos en el aire, en constante movimiento. Algunas áreas se difuminan delicadamente, creando una sensación de inestabilidad, como si las nubes estuvieran a punto de desintegrarse en el aire. ', -60);
lugar9.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">Los tonos de blanco, gris, azul pálido y beige se mezclan en una danza sutil, como si fueran vapores suspendidos en el aire, en constante movimiento. Algunas áreas se difuminan delicadamente, creando una sensación de inestabilidad, como si las nubes estuvieran a punto de desintegrarse en el aire. </div>'; 
panorama.add(lugar9)


var lugar10 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar10.position.set(-500, 86, -151);
lugar10.addHoverText('El color blanco predomina, pero no en su pureza absoluta, sino con variaciones que van desde el blanco lechoso hasta el gris perla, pasando por matices azules y lavandas.  ', -60);
lugar10.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;">El color blanco predomina, pero no en su pureza absoluta, sino con variaciones que van desde el blanco lechoso hasta el gris perla, pasando por matices azules y lavandas. </div>'; 
panorama.add(lugar10)


var lugar11 = new PANOLENS.Infospot(30,'img/yt.png');
lugar11.position.set(92, 57, -500);
lugar11.addHoverText('Video Ilustrativo sobre museos.', -60);
lugar11.element.innerHTML = `
<div class="" style="">
<iframe width="720" height ="480" src= "https://www.youtube.com/embed/runcHeOo-4A">
</iframe>
</div> 
`;
panorama.add(lugar11);



var lugar12 = new PANOLENS.Infospot(40, 'img/ic.png');
lugar12.position.set(309, -5, -500);
lugar12.addHoverText('El arte abstracto es una corriente artística que se caracteriza por la representación no figurativa, donde las formas, los colores y las líneas se utilizan de manera autónoma, alejándose de la representación directa de la realidad. ', -60);
lugar12.element.innerHTML= '<div style ="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 50px; padding: 10px; font-size: 14px; width: 200px;"> El arte abstracto es una corriente artística que se caracteriza por la representación no figurativa, donde las formas, los colores y las líneas se utilizan de manera autónoma, alejándose de la representación directa de la realidad. </div>'; 
panorama.add(lugar12)




viewer = new PANOLENS.Viewer ({container: container});
viewer.add(panorama);

