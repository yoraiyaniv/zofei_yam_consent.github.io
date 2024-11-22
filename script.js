function health_check(){
    health_select = document.getElementById("health");
    div_health = document.getElementById("not_healthy");
    id = health_select.selectedIndex;
    if (id === 1) {
        div_health.style.display = "block";
    }else{
        div_health.style.display = "none";
    }
}
function asthma_check(){
    asthma_select = document.getElementById("astma");
    div_asthma = document.getElementById("astma_div");
    checked = asthma_select.checked;
    if (checked) {
        div_asthma.style.display = "block";
    }else{
        div_asthma.style.display = "none";
    }
}
function medicine_check(){
    medicine_select = document.getElementById("medicine");
    div_medicine = document.getElementById("medicine_div");
    checked = medicine_select.checked;
    if (checked) {
        div_medicine.style.display = "block";
    }else{
        div_medicine.style.display = "none";
    }
}
function self_check(){
    self = document.getElementById("self");
    self_text = document.getElementById("self_text");
    checked = self.checked;
    if (checked) {
        self_text.style.display = "block";
    }else{
        self_text.style.display = "none";
    }
}
