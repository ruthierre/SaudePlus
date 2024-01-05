import MedicamentoProps from "./MedicamentosProps";

interface FormMedicamentoProps {
    medicamentosSelec: MedicamentoProps[];
    excluirMedicamento: (medicamento: MedicamentoProps) => void;
}

export default FormMedicamentoProps;
