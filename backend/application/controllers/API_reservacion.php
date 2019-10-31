<?php
use Restserver\Libraries\REST_Controller;
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/REST_Controller.php';
require APPPATH . '/libraries/Format.php';

class API_reservacion extends CI_Controller {
	use REST_Controller {
        REST_Controller::__construct as private __resTraitConstruct;
	}
	function __construct()
    {
        // Construct the parent class
        parent::__construct();
		$this->__resTraitConstruct();
		$this->load->database();
	}

	public function test_get(){
		$array = array("Hola","Mundo","CodeIgniter");
		$this->response($array);
	}
}
