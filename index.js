$(function(){
    $('#name-2').bind('keypress',function(event){
            if(event.keyCode == "13")
            {
                $(document).ready(function(){
                    $('#communication').text($('#name-2').val())
                })

            }
        })
})
$(function () {
    $('#name-3').bind('keypress',function(event){
        if(event.keyCode == "13")
        {
            $(document).ready(function(){
                $('#time-sense').text($('#name-3').val())
            })

        }
    })
})
$(function () {
    $('#name-4').bind('keypress',function(event){
        if(event.keyCode == "13")
        {
            $(document).ready(function(){
                $('#technology').text($('#name-4').val())
            })

        }
    })
})








