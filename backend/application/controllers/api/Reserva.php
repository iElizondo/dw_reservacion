<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Reserva extends REST_Controller {

        public function __construct()
        {
                parent::__construct();
                $this->load->database();
                $this->reserbaTb = 'tb_reserva';
        }

        public function getReserva_get()
        {
            $id = $this->uri->segment(4);

            if(!empty($id)){
                $data = $this->db->get_where($this->reserbaTb, ['r_id' => $id])->row_array();
            }else{
                $data = $this->db->get($this->reserbaTb)->result();
            }

            if(!$data)
                $data = 'No hay reservaciones con este ID.';

            $this->response($data, REST_Controller::HTTP_OK);
        }

        public function insertReserva_post()
        {
            var_dump($this->input->post()); 

            $data = $this->input->post();

            if($this->db->insert($this->reserbaTb, $data))
                $this->response('Reservacion insertada con éxito. ', REST_Controller::HTTP_OK); 
        }

        public function updateReserva_post()
        {
            $id = $this->input->post('r_id');
            $data = $this->input->post();

            if($this->db->update($this->reserbaTb, $data, array('r_id'=>$id)))
                $this->response('Reservacion actualizada con éxito.', REST_Controller::HTTP_OK);
        }

        // public function deleteReserva_post()
        // {
        //     $id = $this->input->post('r_id');
        //     $data = $this->input->post();

        //     if($this->db->update($this->reserbaTb, $data, array('r_id'=>$id)))
        //         $this->response('Reservacion eliminada con éxito.', REST_Controller::HTTP_OK);
        // }
}