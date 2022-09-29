import Form from "../models/formModel.js";
import midtransClient from 'midtrans-client';

var coreApi = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: 'SB-Mid-server-95D7Yv0F8veu2NhY0s3YG0DG',
  clientKey: 'SB-Mid-client-m9HDKeS3k1kYt4cr'
});


export const getOrder = async (req, res) => {
  try {
    const response = await Form.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// Post Tambah data
export const postOrder = async (req, res) => {
  const { name, email } = req.body
  await coreApi.charge(req.body).then(async (response) => {
    const order = await Form.create({
      order_id: response.order_id,      
      name: name,
      email: email,
      response_midtrans: response.order_id
    })

    res.json({
      message: 'Success',
      data: order,
      code: 201
    })

  }).catch((e) => {
    res.json({
      status: false,
      pesan: "Gagal orderss: " + e.message,
      data: []
    });
  });
};