'use server';

import { eq } from 'drizzle-orm';

import { db } from '@/modules/db';
import { userRoles } from '@/modules/user-roles/schema';

interface Role {
  id: number;
  roleName: string;
  roleTag: string;
}

export async function createRole() {
  try {
    // Create the user role object directly
    const user_role = {
      roleName: 'Administrator',
      roleTag: 'Admin',
    };

    // Insert the user role into the database
    await db.insert(userRoles).values({
      roleName: user_role.roleName,
      roleTag: user_role.roleTag,
    });
  } catch (error) {
    // Handle the error here
    console.error(error);
  }
}

export async function getRoles() {
  try {
    // Fetch all songs from the database
    const roles = await db.select().from(userRoles).execute();
    return roles;
  } catch (error) {
    // Handle the error here
    console.error('Error fetching songs:', error);
    throw error;
  }
}

