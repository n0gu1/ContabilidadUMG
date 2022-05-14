function sumard() {
    try {
        let debe = parseFloat(document.getElementById("debe").value) || 0;
        debe1= parseFloat(document.getElementById("debe1").value) || 0;
        debe2 = parseFloat(document.getElementById("debe2").value) || 0;
        debe3= parseFloat(document.getElementById("debe3").value) || 0;
        debe4 = parseFloat(document.getElementById("debe4").value) || 0;
        debe5= parseFloat(document.getElementById("debe5").value) || 0;
        debe6 = parseFloat(document.getElementById("debe6").value) || 0;
        debe7= parseFloat(document.getElementById("debe7").value) || 0;
        debe8 = parseFloat(document.getElementById("debe8").value) || 0;
        debe9= parseFloat(document.getElementById("debe9").value) || 0;
        debe10= parseFloat(document.getElementById("debe10").value) || 0;
        debe11 = parseFloat(document.getElementById("debe11").value) || 0;
        debe12= parseFloat(document.getElementById("debe12").value) || 0;
        debe13 = parseFloat(document.getElementById("debe13").value) || 0;
        debe14= parseFloat(document.getElementById("debe14").value) || 0;
        debe15 = parseFloat(document.getElementById("debe15").value) || 0;
        debe16= parseFloat(document.getElementById("debe16").value) || 0;
        debe17 = parseFloat(document.getElementById("debe17").value) || 0;
        debe18= parseFloat(document.getElementById("debe18").value) || 0;
        debe19 = parseFloat(document.getElementById("debe19").value) || 0;
        debe20= parseFloat(document.getElementById("debe20").value) || 0;
        debe21 = parseFloat(document.getElementById("debe21").value) || 0;



        document.getElementById("total2").value = debe + debe1 + debe2 + debe3 + debe4 + debe5 + debe6 + debe7 + debe8 + debe9 + debe10 + debe11 + debe12 + debe13 + debe14 + debe15 + debe16 + debe17 + debe18 + debe19 + debe20 + debe21;
            
        } catch (e) {}
}

function sumarh() {
    try {
        let haber = parseFloat(document.getElementById("haber").value) || 0;
        haber1= parseFloat(document.getElementById("haber1").value) || 0;
        haber2 = parseFloat(document.getElementById("haber2").value) || 0;
        haber3= parseFloat(document.getElementById("haber3").value) || 0;
        haber4 = parseFloat(document.getElementById("haber4").value) || 0;
        haber5= parseFloat(document.getElementById("haber5").value) || 0;
        haber6 = parseFloat(document.getElementById("haber6").value) || 0;
        haber7= parseFloat(document.getElementById("haber7").value) || 0;
        haber8 = parseFloat(document.getElementById("haber8").value) || 0;
        haber9= parseFloat(document.getElementById("haber9").value) || 0;
        haber10= parseFloat(document.getElementById("haber10").value) || 0;
        haber11 = parseFloat(document.getElementById("haber11").value) || 0;
        haber12= parseFloat(document.getElementById("haber12").value) || 0;
        haber13 = parseFloat(document.getElementById("haber13").value) || 0;
        haber14= parseFloat(document.getElementById("haber14").value) || 0;
        haber15 = parseFloat(document.getElementById("haber15").value) || 0;
        haber16= parseFloat(document.getElementById("haber16").value) || 0;
        haber17 = parseFloat(document.getElementById("haber17").value) || 0;
        haber18= parseFloat(document.getElementById("haber18").value) || 0;
        haber19 = parseFloat(document.getElementById("haber19").value) || 0;
        haber20= parseFloat(document.getElementById("haber20").value) || 0;
        haber21 = parseFloat(document.getElementById("haber21").value) || 0;



        document.getElementById("total3").value = haber + haber1 + haber2 + haber3 + haber4 + haber5 + haber6 + haber7 + haber8 + haber9 + haber10 + haber11 + haber12 + haber13 + haber14 + haber15 + haber16 + haber17 + haber18 + haber19 + haber20 + haber21;
            
        } catch (e) {}
    }


    // Guardar Todo

    function saveTextAsFile()
    {
        var textToWrite =  document.getElementById("cuenta").value +  ("\r\n") + document.getElementById("cuenta1").value +  ("\r\n") + document.getElementById("cuenta2").value + ("\r\n") + document.getElementById("cuenta3").value + ("\r\n")
        + document.getElementById("cuenta4").value + ("\r\n") + document.getElementById("cuenta5").value + ("\r\n") + document.getElementById("cuenta6").value + ("\r\n") + document.getElementById("cuenta7").value + ("\r\n") 
        + document.getElementById("cuenta8").value + ("\r\n") + document.getElementById("cuenta9").value + ("\r\n") + document.getElementById("cuenta10").value + ("\r\n") + document.getElementById("cuenta11").value + ("\r\n")
        + document.getElementById("cuenta12").value + ("\r\n") + document.getElementById("cuenta13").value + ("\r\n") + document.getElementById("cuenta14").value + ("\r\n") + document.getElementById("cuenta15").value + ("\r\n")
        + document.getElementById("cuenta16").value + ("\r\n") + document.getElementById("cuenta17").value + ("\r\n") + document.getElementById("cuenta18").value + ("\r\n") + document.getElementById("cuenta19").value + ("\r\n")
        + document.getElementById("cuenta20").value + ("\r\n") + document.getElementById("cuenta21").value + ("\r\n")
        
        + document.getElementById("debe").value +  ("\r\n") + document.getElementById("debe1").value +  ("\r\n") + document.getElementById("debe2").value + ("\r\n") + document.getElementById("debe3").value + ("\r\n")
        + document.getElementById("debe4").value + ("\r\n") + document.getElementById("debe5").value + ("\r\n") + document.getElementById("debe6").value + ("\r\n") + document.getElementById("debe7").value + ("\r\n") 
        + document.getElementById("debe8").value + ("\r\n") + document.getElementById("debe9").value + ("\r\n") + document.getElementById("debe10").value + ("\r\n") + document.getElementById("debe11").value + ("\r\n")
        + document.getElementById("debe12").value + ("\r\n") + document.getElementById("debe13").value + ("\r\n") + document.getElementById("debe14").value + ("\r\n") + document.getElementById("debe15").value + ("\r\n")
        + document.getElementById("debe16").value + ("\r\n") + document.getElementById("debe17").value + ("\r\n") + document.getElementById("debe18").value + ("\r\n") + document.getElementById("debe19").value + ("\r\n")
        + document.getElementById("debe20").value + ("\r\n") + document.getElementById("debe21").value + ("\r\n") + document.getElementById("total2").value + ("\r\n")
        
        + document.getElementById("haber").value +  ("\r\n") + document.getElementById("haber1").value +  ("\r\n") + document.getElementById("haber2").value + ("\r\n") + document.getElementById("haber3").value + ("\r\n")
        + document.getElementById("haber4").value + ("\r\n") + document.getElementById("haber5").value + ("\r\n") + document.getElementById("haber6").value + ("\r\n") + document.getElementById("haber7").value + ("\r\n") 
        + document.getElementById("haber8").value + ("\r\n") + document.getElementById("haber9").value + ("\r\n") + document.getElementById("haber10").value + ("\r\n") + document.getElementById("haber11").value + ("\r\n")
        + document.getElementById("haber12").value + ("\r\n") + document.getElementById("haber13").value + ("\r\n") + document.getElementById("haber14").value + ("\r\n") + document.getElementById("haber15").value + ("\r\n")
        + document.getElementById("haber16").value + ("\r\n") + document.getElementById("haber17").value + ("\r\n") + document.getElementById("haber18").value + ("\r\n") + document.getElementById("haber19").value + ("\r\n")
        + document.getElementById("haber20").value + ("\r\n") + document.getElementById("haber21").value + ("\r\n") + document.getElementById("total3").value + ("\r\n");

        var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
        var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null)
        {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
        else
        {
            // Firefox requires the link to be added to the DOM
            // before it can be clicked.
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
    
        downloadLink.click();
    }
    
    function destroyClickedElement(event)
    {
        document.body.removeChild(event.target);
    }
    
    
    function loadFileAsText()
    {
        var fileToLoad = document.getElementById("fileToLoad").files[0];
    
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) 
        {
    
            var textFromFileLoaded = fileLoadedEvent.target.result;
            var text = textFromFileLoaded.split("\n");
            document.getElementById("cuenta").value = text[0];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta1").value = text[1];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta2").value = text[2];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta3").value = text[3];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta4").value = text[4];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta5").value = text[5];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta6").value = text[6];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta7").value = text[7];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta8").value = text[8];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta9").value = text[9];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta10").value = text[10];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta11").value = text[11];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta12").value = text[12];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta13").value = text[13];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta14").value = text[14];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta15").value = text[15];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta16").value = text[16];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta17").value = text[17];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta18").value = text[18];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta19").value = text[19];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta20").value = text[20];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("cuenta21").value = text[21];



            var textFromFileLoaded = fileLoadedEvent.target.result;
            var text = textFromFileLoaded.split("\n");
            document.getElementById("debe").value = text[22];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe1").value = text[23];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe2").value = text[24];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe3").value = text[25];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe4").value = text[26];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe5").value = text[27];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe6").value = text[28];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe7").value = text[29];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe8").value = text[30];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe9").value = text[31];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe10").value = text[32];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe11").value = text[33];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe12").value = text[34];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe13").value = text[35];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe14").value = text[36];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe15").value = text[37];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe16").value = text[38];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe17").value = text[39];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe18").value = text[40];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe19").value = text[41];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe20").value = text[42];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("debe21").value = text[43];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("total2").value = text[44];


            var textFromFileLoaded = fileLoadedEvent.target.result;
            var text = textFromFileLoaded.split("\n");
            document.getElementById("haber").value = text[45];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber1").value = text[46];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber2").value = text[47];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber3").value = text[48];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber4").value = text[49];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber5").value = text[50];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber6").value = text[51];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber7").value = text[52];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber8").value = text[53];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber9").value = text[54];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber10").value = text[55];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber11").value = text[56];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber12").value = text[57];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber13").value = text[58];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber14").value = text[59];
        
            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber15").value = text[60];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber16").value = text[61];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber17").value = text[62];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber18").value = text[63];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber19").value = text[64];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber20").value = text[65];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("haber21").value = text[66];

            var textFromFileLoaded = fileLoadedEvent.target.result;
            document.getElementById("total3").value = text[67];

        };
        fileReader.readAsText(fileToLoad, "UTF-8");
    
    }
    