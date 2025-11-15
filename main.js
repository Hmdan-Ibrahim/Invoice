const form = document.getElementById("dataForm");
const printArea = document.getElementById("printArea");
const formContainer = document.getElementById("formContainer");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("dat3e", document.getElementById("plateNumber")?.value);

    // جلب القيم من النموذج
    const date = document.getElementById("date").value || new Date();
    const city = document.getElementById("city").value;
    const driver = document.getElementById("driver").value;
    const national = document.getElementById("national").value;
    const residenceNumber = document.getElementById("residenceNumber").value;
    const phone = document.getElementById("phone").value;
    const plateNumber = document.getElementById("plateNumber")?.value;
    const carBrand = document.getElementById("carBrand").value;
    const totalPayload = document.getElementById("totalPayload").value;
    const currentPayload = document.getElementById("currentPayload").value;
    const sender = document.getElementById("sender").value;
    const receiver = document.getElementById("receiver").value;
    const comssDees = document.getElementById("comssDees").value;

    const newDate = date
    const dateAfterConvert = `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}م`
    // تعبئة البيانات في منطقة الطباعة
    document.getElementById("printDate").textContent = dateAfterConvert;
    document.getElementById("printCity").textContent = city;
    document.getElementById("printDriver").textContent = driver;
    document.getElementById("printNational").textContent = national;
    document.getElementById("printResidenceNumber").textContent = residenceNumber;
    document.getElementById("printPhone").textContent = phone;
    document.getElementById("printPlateNumber").textContent = plateNumber;
    document.getElementById("printCarBrand").textContent = carBrand;
    document.getElementById("printTotalPayload").textContent = totalPayload;
    document.getElementById("printCurrentPayload").textContent = currentPayload;
    document.getElementById("printSender").textContent = sender;
    document.getElementById("printReceiver").textContent = receiver;
    document.getElementById("printComssDees").textContent = comssDees;

    // إظهار منطقة الطباعة
    formContainer.style.display = "none";
    printArea.style.display = "block";

    // فتح نافذة الطباعة (المستخدم يمكنه اختيار "حفظ كملف PDF")
       // setTimeout(() => {
        window.print();

        // formContainer.style.display = "block";
        // printArea.style.display = "none";
        // form.reset();
    // }, 500); // ← 500ms مناسب للموبايل
});
