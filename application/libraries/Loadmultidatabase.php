<?php
class Loadmultidatabase {
    public function __construct() {
        $this->load();
    }
    public function load() {
        $CI =& get_instance();

        //$CI->pg1 = $CI->load->database('default', TRUE);
        // $CI->pg1 = $CI->load->database('db_postgres_1', TRUE);
    }
}
?>