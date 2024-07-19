import Image from 'next/image';
import logo from '@/images/logos/performance_golf_logo.png'
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src={logo} 
      alt="Logo"
      width={109}
      height={40}
      {...props}
    />
  );
}
