
  <?php

   $ar = fopen("php/Udata/data.txt", "a") or
    die("Problemas en la creacion");
  fputs($ar, $_REQUEST['iUsername']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['iFullName']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['iEmail']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['basicUrl']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['iUsername']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['Nphone']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['iCity']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['iState']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['iZip']);
  fputs($ar, "\n");
  fputs($ar, $_REQUEST['gridCheck'])
  fclose($ar);
  echo "Los datos se cargaron correctamente.";
  /*===============================
  READ DATA
  ================================*//
  
  $ar = fopen("php/Udata/data.txt", "r") or
    die("No se pudo abrir el archivo");
  while (!feof($ar)) {
    $linea = fgets($ar);
    $lineasalto = nl2br($linea);
    echo $lineasalto;
  }
  fclose($ar);
  
  ?>
 