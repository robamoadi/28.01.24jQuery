$(() =>{
    $('#btn1').on('click', () => {
        $('#result').html(Date())
    })
    $('#btn2').on('click', () => {
        $('#my_p1').css( {background_color: 'red'} )
       
    })
    $('#btn3').on('mouseenter', () => {
        $('#my_p1').html(Date())
    })
    $('#btn4').on('click', () => {
        $('#btn1').off()
        $('#btn2').off()
        $('#btn3').off()
    })
})