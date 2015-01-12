$(function () {
    $('#tr-container').highcharts({
        chart: {
            zoomType: 'x'
        },
		credits: {
			href: 'http://nediyor.com/',
			text: 'data collected from nediyor.com'
		},
        tooltip:{
            useHTML: true,
          formatter:function(){
            //console.log(this);
	    var ind = (this.x/(1000*24*3600) - Date.UTC(2013, 4, 15)/(1000*24*3600));
            var hdr = '<small>'+Highcharts.dateFormat('%A, %b %e %Y',new Date(this.x))+'</small><br>'+this.series.name+': '+this.y+'<br>';
            switch(ind){
		case 15: return hdr+'Police raided the Gezi protesters\' encampments';
	    case 16: return hdr+'Taksim is boiling<br>First response from the PM';
	    case 17: return hdr+'Gezi Park opened and reclosed<br>Besiktas is boiling now';
        case 18: return hdr+'Great hatred to news media<br>Erdogan: Twitter is evil<br>Wounded are treated in a mosque';
	    case 27: return hdr+'Final harsh police intervention';		
	    case 138: return hdr+'Erdogan revealed democratizaion package';
	    case 216:
	    case 217: return hdr+'<a href="http://en.wikipedia.org/wiki/2013_corruption_scandal_in_Turkey" target="_blank">Graft probe #1</a>';
	    case 224:
	    case 225: return hdr+'<a href="http://en.wikipedia.org/wiki/2013_corruption_scandal_in_Turkey" target="_blank">Graft probe #2</a>';
	    case 300:
	    case 301: return hdr+'Berkin Elvan passed away';
	    case 310: return hdr+'Twitter blocked';
	    case 316: return hdr+'Youtube blocked';
	    case 319: return hdr+'Local elections';
	    case 364: return hdr+'Soma mine disaster (301 deads)';
	    case 452: return hdr+'Presidential elections';
            }
            return hdr;
          }
        },
        title: {
            // text: 'Gezi\'den Gunumuze Unlulerin Ulusal Haber Degeri Tasiyan Olaylarla Ilgili Attigi Tweet Sayilari'
            text: 'Newsworthy Commentary Tweets of Opinion-shapers and Newsmakers in Turkey'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 14 * 24 * 3600000 // fourteen days
        },
        yAxis: {
            endOnTick: false,
            maxPadding: 0.1,
	    min : 0,
            title: {
                // text: 'Unlu Tweet Sayisi'
                text: 'Daily aggregated tweet count'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Total # of tweets',
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2013, 4, 15),
            data: [147, 130, 74, 27, 164, 49, 49, 100, 311, 149, 80, 47, 79, 298, 359, 247, 1813, 1343, 1661, 669, 621, 584, 538, 625, 459, 752, 351, 1355, 428, 824, 430, 903, 750, 315, 499, 342, 125, 238, 323, 235, 307, 323, 222, 133, 245, 189, 131, 97, 268, 85, 121, 223, 240, 222, 326, 510, 317, 229, 148, 245, 69, 113, 160, 201, 73, 294, 157, 154, 109, 132, 250, 42, 418, 41, 143, 165, 180, 119, 167, 101, 178, 176, 460, 117, 116, 213, 90, 103, 72, 73, 146, 329, 165, 105, 175, 115, 152, 99, 114, 479, 133, 221, 101, 85, 218, 114, 162, 306, 242, 85, 134, 141, 181, 222, 216, 48, 163, 284, 557, 195, 216, 239, 174, 206, 294, 217, 272, 162, 201, 81, 163, 107, 59, 146, 134, 61, 91, 53, 799, 122, 60, 318, 234, 34, 47, 135, 141, 322, 51, 120, 107, 36, 59, 131, 114, 48, 20, 154, 46, 180, 271, 100, 139, 99, 127, 134, 193, 497, 209, 449, 104, 83, 120, 239, 398, 313, 158, 213, 305, 46, 270, 216, 147, 129, 131, 303, 70, 315, 301, 192, 202, 131, 160, 257, 257, 320, 146, 241, 155, 128, 115, 230, 296, 188, 232, 190, 181, 107, 202, 402, 275, 212, 164, 119, 80, 309, 550, 931, 468, 427, 560, 338, 330, 343, 905, 782, 711, 266, 254, 259, 537, 194, 369, 585, 313, 346, 282, 561, 522, 419, 458, 161, 378, 411, 358, 332, 341, 384, 181, 379, 445, 251, 274, 329, 538, 162, 303, 224, 280, 405, 240, 260, 199, 103, 417, 197, 412, 356, 231, 172, 306, 405, 369, 223, 319, 298, 306, 99, 264, 352, 297, 234, 179, 224, 136, 580, 580, 441, 264, 468, 214, 137, 215, 178, 424, 351, 473, 139, 155, 495, 734, 831, 617, 513, 233, 289, 321, 513, 511, 366, 1050, 346, 427, 352, 490, 547, 852, 479, 236, 955, 668, 632, 281, 380, 302, 374, 104, 212, 405, 306, 272, 291, 145, 140, 219, 164, 187, 245, 244, 178, 119, 233, 202, 327, 226, 436, 161, 50, 196, 347, 315, 590, 254, 117, 68, 231, 312, 176, 154, 100, 285, 195, 163, 308, 1217, 653, 750, 412, 246, 322, 306, 268, 366, 441, 248, 127, 185, 335, 277, 296, 319, 643, 349, 256, 329, 207, 212, 233, 202, 154, 372, 252, 552, 326, 246, 47, 370, 401, 289, 329, 387, 179, 148, 110, 183, 264, 143, 200, 250, 218, 174, 157, 351, 329, 217, 186, 195, 153, 187, 183, 167, 355, 318, 138, 113, 217, 210, 259, 229, 325, 199, 184, 245, 408, 407, 268, 315, 322, 210, 464, 151, 253, 183, 197, 232, 322, 309, 209, 433, 470, 237, 276, 988, 405, 339, 238, 262, 430, 219, 135, 180, 240, 272, 570, 311, 146, 162, 245, 217, 474, 510, 345, 295, 57, 413, 141, 263, 184, 256, 265, 277, 332, 255, 222, 205, 295, 164, 152, 205, 237, 222, 258, 223, 452, 127, 234, 209, 244, 248, 230, 131, 203, 242, 259, 205, 368, 129, 190, 96, 233, 557, 535, 598, 397, 223, 349, 190, 339, 241, 191, 311, 116, 157, 220, 293, 201, 209, 147, 333, 270, 139, 356, 515, 374, 341, 164, 290, 323, 203, 210, 192, 308, 83, 64, 407, 202, 216, 141, 185, 144, 294, 180, 204, 240, 235, 140, 149, 141, 498, 359, 359, 345, 270, 150, 113, 339, 379, 509, 309, 355, 289, 125, 372, 334, 311, 271, 245, 244, 615, 420, 372, 380, 263, 426, 128, 127, 302, 184, 301, 286, 230, 163, 133, 293, 435, 374, 219, 169, 145, 204, 632, 411, 347, 253, 54]
        }]
    });
});


$(function () {
    $('#us-container').highcharts({
        chart: {
            zoomType: 'x'
        },
		credits: {
			href: 'http://theplazz.com/',
			text: 'data collected from theplazz.com'
		},
        title: {
            text: 'Newsworthy Commentary Tweets of Opinion-shapers and Newsmakers in the US'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 14 * 24 * 3600000 // fourteen days
        },
        yAxis: {
            endOnTick: false,
            maxPadding: 0.1,
	    min : 0,
            title: {
                text: 'Daily aggregated tweet count'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        tooltip:{
            useHTML: true,
          formatter:function(){
            //console.log(this);
	    var ind = (this.x/(1000*24*3600) - Date.UTC(2013, 0, 14)/(1000*24*3600));
            var hdr = '<small>'+Highcharts.dateFormat('%A, %b %e %Y',new Date(this.x))+'</small><br>'+this.series.name+': '+this.y+'<br>';
            switch(ind){
			case 379: return hdr+'Obama promises a year of action for 2014<br>D.C. awaits State of the Union address<br>Folk music legend, activist Seeger dies';
			case 384: return hdr+'Actor Philip Seymour Hoffman dead at 46<br>SB spots cost $4M, bring massive exposure<br>Bruno Mars, Chili Peppers rock halftime';
			case 412: return hdr+'Oscars for Best actors go to ...<br>Fashion is the passion on the red carpet<br>';
			case 659: return hdr+'United States elections, 2014';
			case 702: return hdr+'Sony axes Christmas day release of ‘The Interview’<br>Obama to ‘normalize’ US-Cuba relations<br>US blames North Korea for Sony cyber hack';
            }
            return hdr;
          }
        },
        series: [{
            type: 'area',
            name: 'Total # of tweets',
            pointInterval: 24 * 3600 * 1000,
            pointStart: Date.UTC(2013, 0, 14),
            data: [94, 40, 218, 21, 171, 29, 72, 112, 0, 323, 151, 175, 75, 177, 65, 25, 54, 73, 249, 94, 246, 147, 218, 40, 21, 35, 122, 118, 59, 265, 201, 297, 124, 117, 83, 108, 44, 171, 98, 172, 7, 333, 177, 154, 169, 117, 138, 151, 27, 34, 244, 200, 186, 99, 13, 118, 142, 113, 313, 147, 131, 146, 127, 94, 131, 173, 122, 155, 112, 61, 122, 173, 151, 43, 121, 0, 260, 139, 173, 116, 244, 221, 19, 109, 438, 164, 234, 149, 55, 60, 73, 201, 86, 147, 161, 218, 62, 123, 39, 132, 77, 96, 121, 54, 53, 159, 99, 114, 156, 40, 89, 0, 182, 183, 71, 107, 135, 48, 141, 217, 109, 210, 119, 122, 42, 129, 206, 169, 119, 133, 56, 45, 63, 36, 54, 65, 94, 46, 84, 45, 135, 54, 156, 103, 145, 79, 93, 132, 46, 30, 118, 0, 129, 58, 69, 136, 224, 228, 96, 128, 304, 193, 357, 258, 198, 148, 319, 110, 214, 210, 199, 222, 128, 208, 232, 65, 277, 171, 85, 312, 293, 108, 151, 171, 169, 235, 211, 248, 36, 273, 360, 411, 185, 161, 246, 16, 222, 330, 119, 281, 136, 157, 110, 346, 98, 205, 182, 267, 282, 48, 156, 148, 209, 162, 77, 163, 103, 143, 155, 197, 336, 140, 166, 146, 249, 195, 154, 304, 205, 245, 50, 156, 306, 325, 265, 268, 138, 188, 441, 478, 236, 303, 151, 266, 267, 263, 188, 241, 249, 282, 135, 288, 351, 250, 337, 156, 208, 164, 284, 340, 406, 344, 305, 268, 176, 102, 228, 345, 211, 326, 244, 104, 86, 288, 307, 407, 245, 179, 208, 72, 243, 217, 201, 183, 114, 235, 272, 212, 159, 377, 253, 133, 109, 150, 147, 427, 242, 244, 227, 35, 103, 276, 79, 191, 206, 220, 86, 97, 178, 148, 229, 148, 102, 249, 180, 184, 193, 219, 437, 146, 292, 291, 229, 242, 190, 481, 244, 305, 86, 208, 388, 302, 304, 183, 215, 285, 162, 232, 319, 136, 370, 37, 195, 143, 355, 302, 133, 159, 158, 166, 152, 325, 264, 195, 218, 238, 121, 299, 283, 298, 294, 171, 195, 235, 346, 174, 180, 247, 304, 134, 296, 167, 309, 187, 335, 285, 127, 274, 187, 514, 349, 176, 339, 107, 767, 239, 280, 253, 290, 353, 149, 153, 283, 279, 356, 274, 263, 202, 300, 219, 276, 289, 251, 318, 164, 244, 283, 169, 276, 216, 350, 126, 649, 178, 272, 270, 234, 301, 304, 181, 230, 299, 191, 176, 280, 167, 204, 273, 262, 59, 318, 64, 330, 173, 269, 333, 168, 238, 310, 153, 228, 284, 329, 253, 272, 225, 112, 193, 268, 185, 171, 246, 164, 153, 300, 209, 191, 229, 284, 253, 92, 315, 185, 182, 231, 231, 168, 111, 155, 308, 292, 430, 160, 213, 182, 57, 324, 308, 166, 287, 259, 146, 282, 315, 209, 309, 221, 185, 129, 189, 185, 159, 168, 208, 87, 339, 167, 304, 214, 415, 244, 263, 87, 148, 201, 292, 177, 204, 227, 264, 218, 220, 300, 308, 329, 287, 188, 334, 188, 187, 323, 191, 188, 96, 82, 125, 126, 270, 258, 84, 156, 275, 321, 290, 181, 113, 269, 117, 47, 153, 305, 197, 220, 99, 187, 275, 127, 158, 158, 262, 157, 95, 161, 97, 216, 129, 186, 52, 167, 160, 165, 169, 241, 148, 209, 163, 69, 158, 122, 112, 131, 143, 69, 125, 175, 338, 132, 325, 121, 174, 164, 206, 218, 266, 154, 177, 121, 125, 264, 206, 182, 270, 72, 216, 68, 59, 187, 165, 412, 105, 57, 137, 264, 378, 329, 350, 235, 78, 113, 116, 216, 296, 242, 264, 93, 170, 99, 251, 255, 307, 120, 87, 141, 150, 185, 211, 130, 104, 180, 101, 170, 143, 240, 234, 143, 160, 71, 170, 187, 326, 141, 130, 68, 50, 213, 261, 345, 190, 209, 201, 176, 178, 241, 237, 302, 297, 238, 172, 212, 559, 384, 173, 221, 144, 111, 231, 209, 298, 174, 151, 167, 68, 191, 235, 217, 365, 161, 145, 144, 404, 473, 227, 419, 240, 134, 119, 223, 197, 299, 350, 295, 197, 118, 163, 460, 260, 330, 116, 210, 254, 249, 356, 553, 248, 261, 248, 220, 153, 333, 337, 440, 133, 225, 112, 104, 278, 422, 328, 99, 227, 226, 136, 369, 355, 263, 304, 184, 121]
        }]
    });
});

