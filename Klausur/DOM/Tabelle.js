var tab=new Array(
    "Was","Wieviel",
    "Mütze","1",
    "T-Shirts","5",
    "Schuhe","2",
    "Taucherbrille","1",
    "Flossen","2"); 

    document.write("<h1>Mitnehmen</h1>")

    document.write("<table cellspacing='2' cellpadding='5' border='2' width='100%'>");
    document.write("<tr>");
    document.write("<th>" + tab[0] + "</th>");
    document.write("<th>" + tab[1] + "</th>");
        document.write("<tr>");
        document.write("<td>" + tab[2] + "</td>");
        document.write("<td>" + tab[3] + "</td>");
        document.write("</tr>");
            document.write("<tr>");
            document.write("<td>" + tab[4] + "</td>");
            document.write("<td>" + tab[5] + "</td>");
            document.write("</tr>");
                document.write("<tr>");
                document.write("<td>" + tab[6] + "</td>");
                document.write("<td>" + tab[7] + "</td>");
                document.write("</tr>");  
                    document.write("<tr>");
                    document.write("<td>" + tab[8] + "</td>");
                    document.write("<td>" + tab[9] + "</td>");
                    document.write("</tr>");
                        document.write("<tr>");
                        document.write("<td>" + tab[10] + "</td>");
                        document.write("<td>" + tab[11] + "</td>");
                        document.write("</tr>");
    document.write("</tr>");
      
document.write("</table>");