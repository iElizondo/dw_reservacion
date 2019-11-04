<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

class Usuario extends REST_Controller {

        public function __construct()
        {
                parent::__construct();
                $this->load->database();
                $this->userTb = 'tb_usuario_reserva';
        }

        public function login_post()
        {
            $usuario = $this->input->post('usuario');
            $contrasena = $this->input->post('contrasena');

            $data = $this->db->get_where($this->userTb,['ur_usuario' => $usuario, 
                                                'ur_contrasena' => $contrasena]
                                        )->row_array();
            if($data)
            {
                $mensaje = 'Usuario encontrado';
            }else
            {
                $mensaje = 'Usuario no encontrado';
            }
            $this->response($mensaje, REST_Controller::HTTP_OK);
        }

        public function getUsuario_get()
        {
            $id = $this->uri->segment(4);

            if(!empty($id)){
                $data = $this->db->get_where($this->userTb, ['id' => $id])->row_array();
            }else{
                $data = $this->db->get($this->userTb)->result();
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