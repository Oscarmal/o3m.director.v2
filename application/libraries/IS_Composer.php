<?php
/**
 * Descripción:		Carga autoload de Composer
 * @author:			Oscar Maldonado - O3M
 */
class IS_Composer{
    public function __construct(){
        include_once(APPPATH.'third_party/autoload.php');
    }
}