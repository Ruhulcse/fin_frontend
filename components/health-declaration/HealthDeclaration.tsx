import HealthDeclarationForm from './HealthDeclarationForm';

const HealthDeclaration = ({ id }: { id: string }) => {
	return (
		<section className="health-declaration grid gap-2 xl:gap-4">
			<p className="text-[#F1D7B5] text-[12px] sm:text-[16px] xl:text-[20px] text-right">
				We are committed to providing a safe and healthy workplace for all
				employees. Please complete the health declaration form below.
			</p>
			<HealthDeclarationForm id={id} />
		</section>
	);
};

export default HealthDeclaration;
