for (let i = 0; i <= 5; i++) {
            for (let j = 0; j < 10; j++) {
                if(i%2==0){
                    document.write('<div class="square1"></div>');
                } else {
                    document.write('<div class="square2"></div>');
                }
            }
            document.write("<div style='clear:both;'></div>");
            //document.write("<br>"); another way to break line
        }