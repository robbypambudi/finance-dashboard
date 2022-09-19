import { useParams } from 'react-router-dom';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function TransaksiBarangEdit() {
  const { id } = useParams();
  return (
    <>
      <DashboardShellAdmin>
        <p>Hallo World</p>
      </DashboardShellAdmin>
    </>
  );
}
