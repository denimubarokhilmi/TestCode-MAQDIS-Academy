const hello = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "welcome to Maqdis Academy"
    })
};

const sendData = (req, res) => {
    res.status(200).json({
        data: 100,
        status: "Berhasil"
    })
};

const deleteData = (req, res) => {
    res.status(200).json({
        data: 0,
        status: "Berhasil dihapus"
    })
}

const deleteDeposit = (req, res) => {
    res.status(200).json({
        message: "berhasil",
        id_setoran: 58,
        id_user: 3441,
        id_juz: 30,
    })
}
export {
    hello,
    sendData,
    deleteData,
    deleteDeposit
}