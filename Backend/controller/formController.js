import Form from "../models/formModel.js";
import midtransClient from 'midtrans-client';

var coreApi = new midtransClient.CoreApi({
    isProduction : false,
    serverKey : 'SB-Mid-server-95D7Yv0F8veu2NhY0s3YG0DG',
    clientKey : 'SB-Mid-client-m9HDKeS3k1kYt4cr'
  });


export const getOrder = async(req, res) =>{
    try {
        const response = await Form.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
  
  // Post Tambah data
export const postOrder = (req, res) =>{
    coreApi.charge(req.body).then((chargeResponse)=>{
      const dataOrder = {
      id:chargeResponse.order_id,
      nama:req.body.nama,
      email:req.body.email,
    //  alamat:req.body.alamat,
      // telepon:req.body.telepon,
      // perusahaan:req.body.perusahaan,
      response_midtrans:JSON.stringify(chargeResponse)
      }
      order.create(dataOrder).then( data=>{
        res.json({
        status:true,
        pesan:"Berhasil Order",
        data:data
        });
      }).catch( err=>{
        res.json({
        status: false,
        pesan: "Gagal Order: " + err.message,
        data:[]
        });
        });
      }).catch((e)=>{
        res.json({
        status: false,
        pesan: "Gagal orderss: " + e.message,
        data:[]
      });
    });
  };