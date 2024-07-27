const getRoot= (req, res) => {
    res.status(200).json({ message: 'Hello From Express Server.' });
}

const getHealthCheck = (req, res) => {
    res.status(200).json({ message: 'Express Server is Healthy.' });
}

module.exports = {
    getRoot,
    getHealthCheck
}