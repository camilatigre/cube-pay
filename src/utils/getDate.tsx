export const getDate = () => {
    const data = new Date();
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    const ano = data.getFullYear().toString().slice(2);
    const hora = data.getHours().toString().padStart(2, "0");
    const minuto = data.getMinutes().toString().padStart(2, "0");

    return `${dia} de ${mes} de ${ano} ${hora}:${minuto}`
}

export const transformTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
        return 'Invalid date';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear()
    const mins = String(date.getMinutes()).padStart(2, '0');
    const hours = date.getHours()

    return `${day}/${month}/${year} às ${hours}:${mins}`;
}