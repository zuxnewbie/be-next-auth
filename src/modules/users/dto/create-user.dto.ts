import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'Email không được để trống' })
  @IsEmail({}, { message: 'Email khong dung dinh dang' })
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  phone: string;
  address: string;
  image: string;
}
