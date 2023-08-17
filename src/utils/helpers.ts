import { NextResponse } from 'next/server';
import prisma from '../../prisma';

export const connectToDb = async () => {
  try {
    await prisma.$connect();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const generateErrorMessage = (data: any, status: number) => {
  return NextResponse.json(
    { message: 'Erro', ...data },
    { status, statusText: 'OK' },
  );
};

export const generateSuccessMessage = (data: any, status: number) => {
  return NextResponse.json(
    { message: 'Sucesso', ...data },
    { status, statusText: 'ERROR' },
  );
};
