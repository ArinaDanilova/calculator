send.addEventListener("click",fnc);
function fnc()
{
    let val_Q1 = Q1.value;
    let val_Q2 = Q2.value;
    let val_P1 = P1.value;
    let val_P2 = P2.value;
    let val_E = val_Q1;
    val_E = ((parseInt(val_Q2) - parseInt(val_Q1)) / parseInt(val_Q1)) / ((parseInt(val_P2) - parseInt(val_P1)) / parseInt(val_P1));
    E.value = val_E;

    result.innerHTML = val_E;
}