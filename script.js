//import parameters from 'parameters';
const parameters={"W1": [[-0.5997842890415583, -0.5593039943565378, -1.8022593711494284, -0.17061775633330598, -0.9088387301569189], [-0.34980351842839935, -0.6903563617800434, -1.874730919221654, -0.24142604166088044, -0.04275123317277094]], "b1": [[-0.20427074539779758], [0.172228352465681]], "W2": [[-3.1179913754992095, -3.087308799407178]], "b2": [[1.7461667149210698]]}


const n_x = 5;
const n_h = 2;
const n_y = 1;

function sigmoid(z){
    return 1 / (1 + Math.exp(-z))
}
function forwardPropagation(X, parameters) {
    const W1 = parameters.W1;
    const b1 = parameters.b1;
    const W2 = parameters.W2;
    const b2 = parameters.b2;

    const z10=(W1[0][0]*X[0][0]+W1[0][1]*X[1][0]+W1[0][2]*X[2][0]+W1[0][3]*X[3][0]+W1[0][4]*X[4][0])+ b1[0][0];
    const z11=(W1[1][0]*X[0][0]+W1[1][1]*X[1][0]+W1[1][2]*X[2][0]+W1[1][3]*X[3][0]+W1[1][4]*X[4][0]) +b1[1][0];
    const Z1 = [z10,z11] ;
    const A1 = [sigmoid(Z1[0]),sigmoid(Z1[1])];
    const Z2 = (W2[0][0]*A1[0]+W2[0][1]*A1[1]) + b2[0][0];
    const A2 = sigmoid(Z2);


    return A2>=0.5;
}

function classify() {
    // Get input values
    const age = document.getElementById('age').value;
    const educationalNum = document.getElementById('educational-num').value;
    const capitalGain = document.getElementById('capital-gain').value;
    const capitalLoss = document.getElementById('capital-loss').value;
    const hoursPerWeek = document.getElementById('hours-per-week').value;
    const inputsInst = [ //Normalised
        [(age-38.617149)/13.734401],
        [(educationalNum-10.074118)/2.575092],
        [(capitalGain-1093.559797)/7570.536063],
        [(capitalLoss-88.246491)/404.588410],
        [(hoursPerWeek-40.407694)/12.400303]
    ];

    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = `Income>50K Probability: ` + String(forwardPropagation(inputsInst, parameters));
}
