
  <?php

   $ar = fopen("php/Udata/datos.txt", "a") or
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
  ?>
  ?>