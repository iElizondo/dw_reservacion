<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Empresa extends REST_Controller {

        public function __construct()
        {
                parent::__construct();
                $this->load->database();
                $this->empresaTb = 'tb_empresa';
        }

        public function getEmpresa_get()
        {
            $id = $this->uri->segment(4);

            if(!empty($id)){
                $data = $this->db->get_where($this->empresaTb, ['id' => $id])->row_array();
            }else{
                $data = $this->db->get($this->empresaTb)->result();
            }

            if(!$data)
                $data = 'No hay registros con este ID.';

            $this->response($data, REST_Controller::HTTP_OK);
        }

        // public function insertNews_post()
        // {
        //     $data = $this->input->post();

        //     if($this->db->insert('news', $data))
        //         $this->response('Item insertado con éxito. ', REST_Controller::HTTP_OK); 
        // }

        // public function updateNews_post()
        // {
        //     $id = $this->input->post('id');
        //     $data = $this->input->post();

        //     if($this->db->update('news', $data, array('id'=>$id)))
        //         $this->response('Item actualizado con éxito.', REST_Controller::HTTP_OK);
        // }

        // public function deleteNews_get()
        // {
        //     $id = $this->uri->segment(4);

        //     if($this->db->delete('news', array('id'=>$id)))
        //         $this->response('Item eliminado con éxito.', REST_Controller::HTTP_OK);
        // }
}