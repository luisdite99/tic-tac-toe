'use strict'

var estado =
{
  turno:0,
}

var pagina =
{
	quad:document.querySelectorAll( '.quad' ),
}
var venceu = function()
      setTimeout(function()// bomba relógio
      {
      alert(pagina.quad[0].innerHTML + ' venceu')// o que a bomba faz
      
      Array.from(pagina.quad).map(function(elemento){elemento.innerHTML = ''})
      
      estado.turno = 0
      },
      100) //pavio da bomba ( medido em milisegundos, ms )

var acabou = function()
{
  if(pagina.quad[4].innerHTML !== '' )
  {
    if(pagina.quad[4].innerHTML === pagina.quad[0].innerHTML 
    && pagina.quad[4].innerHTML === pagina.quad[8].innerHTML
    ||pagina.quad[4].innerHTML === pagina.quad[1].innerHTML 
    && pagina.quad[4].innerHTML === pagina.quad[7].innerHTML
    ||pagina.quad[4].innerHTML === pagina.quad[2].innerHTML 
    && pagina.quad[4].innerHTML === pagina.quad[6].innerHTML 
    ||pagina.quad[4].innerHTML === pagina.quad[3].innerHTML 
    && pagina.quad[4].innerHTML === pagina.quad[5].innerHTML)
    {
     venceu(pagina.quad[4].innerHTML)
     return
    }
  }
   if(pagina.quad[0].innerHTML !== '' )
  {
    if(pagina.quad[0].innerHTML === pagina.quad[1].innerHTML 
    && pagina.quad[0].innerHTML === pagina.quad[2].innerHTML 
    ||pagina.quad[0].innerHTML === pagina.quad[3].innerHTML 
    && pagina.quad[0].innerHTML === pagina.quad[6].innerHTML)
    {
     venceu(pagina.quad[0].innerHTML)
     return
    }
  }
   if(pagina.quad[8].innerHTML !== '' )
  {
    if(pagina.quad[8].innerHTML === pagina.quad[2].innerHTML 
    && pagina.quad[8].innerHTML === pagina.quad[5].innerHTML
    ||pagina.quad[8].innerHTML === pagina.quad[6].innerHTML 
    && pagina.quad[8].innerHTML === pagina.quad[7].innerHTML)
    {
     venceu(pagina.quad[8].innerHTML)
     return
    }
  }
  if(estado.turno === 9)
  {
    setTimeout (function()
    {
    alert('Empatou...')
      Array.from(pagina.quad).map(function(elemento){elemento.innerHTML = ''})
      
      estado.turno = 0
    },
    100)
  }
}

var clique = addEventListener( 'click', function( evento )
{
	var alvo = evento.target.id
	
	if( alvo.substring( 0,4 ) === 'quad' )
	{
	 var numero = Number(alvo.substring( 5, 6))
	 var conteudo = pagina.quad[ numero ].innerHTML
	 
	 if(conteudo === '')
	 {
	   console.log( conteudo )
	   if( estado.turno % 2 === 0 )// número par
	   {
	     pagina.quad[ numero ].innerHTML = 'O'
	   }
	   else
	   {
	     pagina.quad [ numero ].innerHTML = 'X'
	   }
	   
	   estado.turno ++
	   
	   acabou()
	 }
	}
}, 
false )
